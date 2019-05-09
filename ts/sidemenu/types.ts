import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";

export interface IRoute {
    link: (channelID: string) => string;
    label: string;
    modsOnly?: boolean;
    nonModsOnly?: boolean;
}

export const routes: IRoute[] = [{
    label: l10n.MESSAGE_LOGS,
    link: Routes.ToChannelUsers,
    modsOnly: true,
},
{
    label: l10n.BANS,
    link: Routes.ToBans,
    modsOnly: true,
},
{
    label: l10n.COMMANDS,
    link: Routes.ToTemplates,
},
{
    label: l10n.SUBALERTS,
    link: Routes.ToSubAlerts,
    modsOnly: true,
},
{
    label: l10n.AUTOMESSAGES,
    link: Routes.ToAutoMessages,
    modsOnly: true,
},
{
    label: l10n.SONGREQUESTS,
    link: Routes.ToSongRequests,
},
{
    label: l10n.SUBDAYS,
    link: Routes.ToSubDays,
    modsOnly: true,
},
{
    label: l10n.SUBDAYS,
    link: Routes.ToLastSubDay,
    nonModsOnly: true,
},
{
    label: l10n.SUBSCRIPTIONS,
    link: Routes.ToSubs,
    modsOnly: true,
},
{
    label: l10n.EXTERNAL_SERVICES,
    link: Routes.ToExternalServices,
    modsOnly: true,
},
{
    label: l10n.SUBTRAIN,
    link: Routes.ToSubTrain,
    modsOnly: true,
},];
