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
    public render() {
        const items = this.props.getNotifications().map((item) => {
            const onClick = () => this.props.hideNotification(item.id);
            return (
                <CSSTransition classNames={{ exit: "notifications__item--hidden" }} timeout={300} key={item.id}>{
                    (state) => (
                        <div
                            className="notifications__item"
                            onClick={onClick}
                        >
                            {item.body}
                        </div>
                    )
                }
                </CSSTransition>
            );
        });
        return (
            <TransitionGroup className="notifications" >
                {items}
            </TransitionGroup>
        );
    }

}
