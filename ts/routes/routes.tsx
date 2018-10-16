import { generatePath } from "react-router";

export const ChannelIndex = "/channel/:channelID";

export const toChannelIndex = (channelID: string) => generatePath(ChannelIndex, { channelID });

export const AfterAuth = "/afterAuth";

export const Subs = "/channel/:channelID/subs";

export const ToSubs = (channelID: string) => generatePath(Subs, { channelID });

export const Templates = "/channel/:channelID/templates";

export const ToTemplates = (channelID: string) => generatePath(Templates, { channelID });

export const Template = "/channel/:channelID/templates/:commandName";

export const ToTemplate = (channelID: string, commandName: string) =>
    generatePath(Template, { channelID, commandName });

export const ChannelUsers = "/channel/:channelID/logs";

export const ToChannelUsers = (channelID: string) => generatePath(ChannelUsers, { channelID });

export const ChannelUserLogs = "/channel/:channelID/logs/:userID";

export const ToChannelUserLogs = (channelID: string, userID: string) =>
    generatePath(ChannelUserLogs, { channelID, userID });

export const AutoMessages = "/channel/:channelID/autoMessages";

export const ToAutoMessages = (channelID: string) => generatePath(AutoMessages, { channelID });

export const NewAutoMessage = "/channel/:channelID/autoMessages/new";

export const ToNewAutoMessage = (channelID: string) => generatePath(NewAutoMessage, { channelID });

export const AutoMessage = "/channel/:channelID/autoMessages/:id";

export const ToAutoMessage = (channelID: string, id: string) => generatePath(AutoMessage, { channelID, id });

export const SubAlerts = "/channel/:channelID/subAlert";

export const ToSubAlerts = (channelID: string) => generatePath(SubAlerts, { channelID });
// // "/channel/:channelID/bits": bits,
// // "/channel/:channelID/bits/:user": userbits,
export const ExternalServices = "/channel/:channelID/externalservices";

export const ToExternalServices = (channelID: string) => generatePath(ExternalServices, { channelID });

export const SubTrain = "/channel/:channelID/subtrain";

export const ToSubTrain = (channelID: string) => generatePath(SubTrain, { channelID });

export const Bans = "/channel/:channelID/bans";

export const ToBans = (channelID: string) => generatePath(Bans, { channelID });

export const SubDays = "/channel/:channelID/subdays";

export const ToSubDays = (channelID: string) => generatePath(SubDays, { channelID });

export const SubDay = "/channel/:channelID/subdays/:subdayID";

export const ToSubDay = (channelID: string, subdayID: string) =>
    generatePath(SubDay, { channelID, subdayID });

export const SongRequests = "/channel/:channelID/songrequests";

export const ToSongRequests = (channelID: string) => generatePath(SongRequests, { channelID });
