export interface ITemplate {
    aliasTo: string;
    channelID: string;
    commandName: string;
    template: string;
}

export interface ITemplateHistory {
    aliasTo: string;
    date: number; // Date;
    template: string;
    user: string;
    userID: string;
}

export interface ITemplateWithHistory extends ITemplate {
    history: ITemplateHistory[];
}
