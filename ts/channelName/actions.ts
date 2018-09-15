import actiontypes from "./actiontypes";

export const getChannelName = (channelNameID: any) => ({
    payload: {
        channelNameID,
    },
    type: actiontypes.GET,
});
