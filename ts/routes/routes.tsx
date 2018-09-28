import { generatePath } from "react-router";

export const ChannelIndex = "/channel/:id";

export const toChannelIndex = (id: string) => generatePath(ChannelIndex, { id });

// "/afterAuth": carcass(AfterAuthComponent),
// "/channel/:channel/subs": carcass(subs),
// "/channel/:channel/templates": carcass(templatesList),
// "/channel/:channel/templates/:template": carcass(templateShow),
// "/channel/:channel/logs": carcass(logsUsers),
// "/channel/:channel/logs/:userID": carcass(logs),
// "/channel/:channel/autoMessages": carcass(autoMessageList),
// "/channel/:channel/autoMessages/new": carcass(autoMessageEdit),
// "/channel/:channel/autoMessages/:id": carcass(autoMessageEdit),
// "/channel/:channel/subAlert": carcass(subAlertShow),
// // "/channel/:channel/bits": bits,
// // "/channel/:channel/bits/:user": userbits,
// "/channel/:channel/externalservices": carcass(externalServices),
// "/channel/:channel/subtrain": carcass(subtrain),
// "/channel/:channel/bans": carcass(bans),
// "/channel/:channel/subdays": carcass(subdayList),
// "/channel/:channel/subdays/:subdayID": carcass(subday),
// "/channel/:channel/songrequests": carcass(songrequests)
