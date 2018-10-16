export enum actiontypes {
    ADD = "NOTIFICATIONS/ADD",
    GET = "NOTIFICATIONS/GET",
    HIDE = "NOTIFICATIONS/HIDE",
    AUTOHIDE = "NOTIFICATIONS/AUTOHIDE",
}

export interface INotificationsAddAction {
    type: actiontypes.ADD;
    payload: {
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

export type NotificationsAction = INotificationsAddAction
    | INotificationsHideAction
    | INotificationsAutohideAction;
