export const getChannelName = (channelNameID: any) => ({
    payload: {
        channelNameID,
    },
    type: "CHANNELNAME/GET",
});
