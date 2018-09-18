import {
    actiontypes,
    IChannelNameGetAction,
    IChannelNameLoadingAction,
    IChannelNameNotFoundAction,
    IChannelNameReadyAction,
} from "./actions";

export const getChannelName = (channelNameID: string): IChannelNameGetAction => ({
    payload: {
        channelNameID,
    },
    type: actiontypes.GET,
});

export const loadingChannelName = (channelNameID: string): IChannelNameLoadingAction => ({
    payload: {
        channelNameID,
    },
    type: actiontypes.LOADING,
});

export const notFoundChannelName = (channelNameID: string): IChannelNameNotFoundAction => ({
    payload: {
        channelNameID,
    },
    type: actiontypes.NOTFOUND,
});

export const readyChannelName = (channelNameID: string, channelName: string): IChannelNameReadyAction => ({
    payload: {
        channelName,
        channelNameID,
    },
    type: actiontypes.READY,
});
