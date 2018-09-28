import { generatePath } from "react-router";

export const ChannelIndex = "/channel/:channel";

export const toChannelIndex = (channel: string ) => generatePath(ChannelIndex, { channel });

export const AfterAuth = "/afterAuth";

export const Subs = "/channel/:channel/subs";

export const ToSubs = (channel: string ) => generatePath(Subs, { channel });

export const Templates = "/channel/:channel/templates";

export const ToTemplates = (channel: string ) => generatePath(Templates, { channel });

export const Template = "/channel/:channel/templates/:template";

export const ToTemplate = (channel: string, template: string ) => generatePath(Template, { channel, template });

export const ChannelLogs = "/channel/:channel/logs";

export const ToChannelLogs = (channel: string ) => generatePath(ChannelLogs, { channel });

export const ChannelUserLogs = "/channel/:channel/logs/:userID";

export const ToChannelUserLogs = (channel: string , userID: string ) =>
    generatePath(ChannelUserLogs, { channel, userID });

export const AutoMessages = "/channel/:channel/autoMessages";

export const ToAutoMessages = (channel: string ) => generatePath(AutoMessages, { channel });

export const NewAutoMessage = "/channel/:channel/autoMessages/new";

export const ToNewAutoMessage = (channel: string ) => generatePath(NewAutoMessage, { channel });

export const AutoMessage = "/channel/:channel/autoMessages/:id";

export const ToAutoMessage = (channel: string , id: string ) => generatePath(AutoMessage, { channel, id });

export const SubAlerts = "/channel/:channel/subAlert";

export const ToSubAlerts = (channel: string ) => generatePath(SubAlerts, { channel });
// // "/channel/:channel/bits": bits,
// // "/channel/:channel/bits/:user": userbits,
export const ExternalServices = "/channel/:channel/externalservices";

export const ToExternalServices = (channel: string ) => generatePath(ExternalServices, { channel });

export const SubTrain = "/channel/:channel/subtrain";

export const ToSubTrain = (channel: string ) => generatePath(SubTrain, { channel });

export const Bans = "/channel/:channel/bans";

export const ToBans = (channel: string ) => generatePath(Bans, { channel });

export const SubDays = "/channel/:channel/subdays";

export const ToSubDays = (channel: string ) => generatePath(SubDays, { channel });

export const SubDay = "/channel/:channel/subdays/:subdayID";

export const ToSubDay = (channel: string , subdayID: string ) =>
    generatePath(SubDay, { channel, subdayID });

export const SongRequests = "/channel/:channel/songrequests";

export const ToSongRequests = (channel: string ) => generatePath(SongRequests , { channel });
