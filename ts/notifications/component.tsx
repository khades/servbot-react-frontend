import classnames from "classnames";
import * as React from "react";
import {
    Transition,
    TransitionGroup,
} from "react-transition-group";
import "../../scss/modules/_notifications.scss";
import { INotification } from "./reducer";

export interface INotificationsProps {
    notifications: INotification[];
    hideNotification: (id: string) => void;
}

export default class NotificationsComponent extends React.Component<INotificationsProps, {}> {
    public render() {
        return (
            <TransitionGroup className="notifications" >
                {this.props.notifications.map(this.generateItem)}
            </TransitionGroup>
        );
    }

    private generateItem = (item: INotification) => (
        <Transition classNames={{ exit: "notifications__item--hidden" }} timeout={300} key={item.id}>
            {(state) => this.generateItemContent(item, state === "exiting")}
        </Transition>
    )

    private generateItemContent = (item: INotification, exiting: boolean) => {
        const itemClasses = classnames({
            "notifications__item": true,
            "notifications__item--hidden": exiting === true,
        });
        return (
            <div
                className={itemClasses}
                key={item.id}
                data-id={item.id}
                onClick={this.hideNotification}
            >
                {item.body}
            </div>
        );
    }

    private hideNotification = (event: React.MouseEvent<HTMLDivElement>): void => {
        this.props.hideNotification(event.currentTarget.dataset.id);
    }
}
