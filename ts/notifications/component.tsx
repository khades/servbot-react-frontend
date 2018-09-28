import * as React from "react";
import {
    CSSTransition,
    TransitionGroup,
} from "react-transition-group";
import "../../scss/modules/_notifications.scss";
import { INotification } from "./reducer";

export interface INotificationsProps {
    notifications: INotification[];
    hideNotification: (id: string) => void;
}

export default class Notifications extends React.Component<INotificationsProps, {}> {
    public render() {
        return (
            <TransitionGroup className="notifications" >
                {this.props.notifications.map(this.generateItem)}
            </TransitionGroup>
        );
    }

    private generateItem = (item: INotification) => (
        <CSSTransition classNames={{ exit: "notifications__item--hidden" }} timeout={300} key={item.id}>
            {() => this.generateItemContent(item)}
        </CSSTransition>
    )

    private generateItemContent = (item: INotification) => (
        <div
            className="notifications__item"
            data-id={item.id}
            onClick={this.hideNotification}
        >
            {item.body}
        </div>
    )

    private hideNotification = (event: React.MouseEvent<HTMLDivElement>): void => {
        this.props.hideNotification(event.currentTarget.dataset.id);
    }
}
