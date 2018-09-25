import * as React from "react";
import {
    CSSTransition,
    TransitionGroup,
} from "react-transition-group";
import "../../scss/modules/_notifications.scss";
import { INotificationsAddAction } from "./actions";
import { INotification } from "./reducer";

export interface INotificationsProps {
    notifications: INotification[];
    hideNotification: (id: string) => INotificationsAddAction;
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
            {() => <div className="notifications__item" data-id={item.id} onClick={this.hideNotification}>{item.body}</div>}
        </CSSTransition>
    )

    private hideNotification = (event: React.MouseEvent<HTMLDivElement>): void => {
        this.props.hideNotification(event.currentTarget.dataset.id);
    }
}
