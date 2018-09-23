import { actiontypes, NotificationsActions } from "./actions";

export interface INotification {
    body: string;
    date: Date;
    id: string;
    type?: string;
}
const initialState: INotification[] = [
    // {  body: "hey", date: new Date(), id: "3" },
    // {  body: "hey", date: new Date(), id: "5" },
    // { body: "hey", date: new Date(), id: "43" },
];

const reducer = (state: INotification[] = initialState, action?: NotificationsActions): INotification[] => {
    switch (action.type) {
        case actiontypes.ADD:
            if (action.payload.type && state.some((item) => item.type === action.payload.type)) {
                return state;
            }
            const newNotification: INotification = {
                body: action.payload.body,
                date: action.payload.date,
                id: Math.random().toString(36).substr(2, 9) + Date().toString(),
                type: action.payload.type,
            };
            return [...state, newNotification];
        case actiontypes.HIDE:
            return state.filter((item) => item.id !== action.payload.id);
        case actiontypes.AUTOHIDE:
            return state.filter((item) =>
                action.payload.date.getTime() - item.date.getTime() < action.payload.notificationTimeout);
        default:
            return state;
    }
};

export default reducer;
