import {
    actiontypes,
    IChannelNameGetAction,
    IChannelNameLoadingAction,
    IChannelNameNotFoundAction,
    IChannelNameReadyAction,
} from "./actions";

export const get = (channelNameID: string): IChannelNameGetAction => ({
    payload: {
        channelNameID,
    },
    type: actiontypes.GET,
});

export const loading = (channelNameID: string): IChannelNameLoadingAction => ({
    payload: {
        channelNameID,
    },
    type: actiontypes.LOADING,
});

export const notFound = (channelNameID: string): IChannelNameNotFoundAction => ({
    payload: {
        channelNameID,
    },
    type: actiontypes.NOTFOUND,
});

export const ready = (channelNameID: string, channelName: string): IChannelNameReadyAction => ({
    payload: {
        channelName,
        channelNameID,
    },
    type: actiontypes.READY,
});
