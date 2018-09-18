export enum actiontypes {
    READY = "CHANNELNAME/READY",
    NOTFOUND = "CHANNELNAME/NOTFOUND",
    LOADING = "CHANNELNAME/LOADING",
    GET = "CHANNELNAME/GET",
}

export interface IChannelNameReadyAction {
    type: actiontypes.READY;
    payload: {
        channelName: string;
        channelNameID: string;
    };
}
export interface IChannelNameNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelNameID: string;
    };
}
export interface IChannelNameLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelNameID: string;
    };
}

export interface IChannelNameGetAction {
    type: actiontypes.GET;
    payload: {
        channelNameID: string;
    };
}
type ChannelNameActions = IChannelNameReadyAction
    | IChannelNameNotFoundAction
    | IChannelNameLoadingAction
    | IChannelNameGetAction;

export default ChannelNameActions;
