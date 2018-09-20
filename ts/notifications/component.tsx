import * as React from "react";
import {
    CSSTransition,
    TransitionGroup,
} from "react-transition-group";
import "../../scss/modules/_notifications.scss";
import { INotification } from "./reducer";

export interface INotificationsProps {
    getNotifications: () => INotification[];
    hideNotification: (id: string) => void;
}

export default class Notifications extends React.Component<INotificationsProps, {}> {
    constructor(props: INotificationsProps) {
        super(props);
        this.generateItem = this.generateItem.bind(this);
    }
    public render() {

        return (
            <TransitionGroup className="notifications" >
                {this.props.getNotifications().map(this.generateItem)}
            </TransitionGroup>
        );
    }

    private generateItem(item: INotification) {
        const onClick = () => this.props.hideNotification(item.id);
        return (
            <CSSTransition classNames={{ exit: "notifications__item--hidden" }} timeout={300} key={item.id}>
                {() => <div className="notifications__item" onClick={onClick}>{item.body}</div>}
            </CSSTransition>
        );
    }
}
