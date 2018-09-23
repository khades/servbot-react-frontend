import * as actions from "./actions";
export const NotificationTimeout: number = 10000;

export const add = (body: string, rgs: string[] = [], type?: string, date: Date = new Date()):
    actions.INotificationsAddAction => ({
        payload: {
            body,
            date,
            type,
        },
        type: actions.actiontypes.ADD,
    });

export const hide = (id: string): actions.INotificationsHideAction => ({
    payload: {
        id,
    },
    type: actions.actiontypes.HIDE,
});

export const autohide = (
    date: Date = new Date(),
    notificationTimeout: number = NotificationTimeout):
    actions.INotificationsAutohideAction => ({
        payload: {
            date,
            notificationTimeout,
        },
        type: actions.actiontypes.AUTOHIDE,
    });
