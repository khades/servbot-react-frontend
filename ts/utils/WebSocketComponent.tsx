import * as React from "react";
import { url } from "../api/api";

export interface IWebSocketProps {
    url: string;
    onMessage: (message: any) => void;
    autoRestartTimeout?: number;
    onStateChange?: (state: number) => void;
}

export class WebSocketComponent extends React.Component<IWebSocketProps, {}> {
    private eventSource: WebSocket = null;
    private timeoutID: number = -1;
    private forceClose = false;
    public componentDidMount() {
        console.log("starting");
        this.connectToWebSocket();
    }

    public componentDidUpdate(prevProps: IWebSocketProps) {
        if (prevProps.url !== this.props.url) {
            console.log("changing route");
            this.preventReconnect();
            this.connectToWebSocket();
        }
    }

    public componentWillUnmount() {
        console.log("unmounting route");

        this.preventReconnect();

        if (this.eventSource && this.eventSource.readyState === WebSocket.OPEN) {
            this.forceClose = true;
            this.eventSource.close();
        }
    }
    public render() {
        return null;
    }
    private onStateChange = (state: number) => {
        if (this.props.onStateChange) {
            this.props.onStateChange(state);
        }
    }

    private connectToWebSocket = () => {
        if (this.eventSource && this.eventSource.readyState === WebSocket.OPEN) {
            this.eventSource.close();
        }

        this.eventSource = new WebSocket(url(this.props.url).replace("https", "wss").replace("http", "ws"));
        this.onStateChange(WebSocket.CONNECTING);

        this.eventSource.onclose = (): any => {
            this.reconnect();
        };

        this.eventSource.onerror = () => {
            if (this.eventSource.readyState === WebSocket.CLOSING) {
                this.onStateChange(WebSocket.CLOSING);
            } else {
                this.reconnect();
            }
        };

        this.eventSource.onopen = () => {
            this.onStateChange(WebSocket.OPEN);
        };

        this.eventSource.onmessage = (ev: MessageEvent): any => {
            this.props.onMessage(ev.data);
        };
    }

    private preventReconnect = () => {
        if (this.timeoutID !== -1) {
            window.clearInterval(this.timeoutID);
        }
    }

    private reconnect = () => {
        this.onStateChange(WebSocket.CLOSED);

        if (this.forceClose === true) {
            return null;
        }

        this.preventReconnect();

        let timeout = 15;

        if (this.props.autoRestartTimeout === 0) {
            return;
        }

        if (this.props.autoRestartTimeout) {
            timeout = this.props.autoRestartTimeout;
        }

        this.timeoutID = window.setTimeout(this.connectToWebSocket, timeout * 1000);
    }
}
