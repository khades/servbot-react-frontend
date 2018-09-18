export enum actiontypes {
    ADD = "NOTIFICATIONS/ADD",
    HIDE = "NOTIFICATIONS/HIDE",
    AUTOHIDE = "NOTIFICATIONS/AUTOHIDE",
}

export interface INotificationsAddAction {
    type: actiontypes.ADD;
    payload: {
        args: string[];
        body: string,
        date: Date,
        type?: string,
    };
}
export interface INotificationsHideAction {
    type: actiontypes.HIDE;
    payload: {
        id: string;
    };
}
export interface INotificationsAutohideAction {
    type: actiontypes.AUTOHIDE;
    payload: {
        date: Date,
        notificationTimeout: number,
    };
}

type NotificationsActions = INotificationsAddAction
    | INotificationsHideAction
    | INotificationsAutohideAction;

export default NotificationsActions;
