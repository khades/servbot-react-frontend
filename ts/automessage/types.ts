export interface IAutoMessage {
    durationLimit: number;
    game: string;
    message: string;
    messageLimit: number;
}

export interface IAutoMessageHistory extends IAutoMessage {
    date: number; // Date;
    user: string;
    userID: string;
}

export interface IAutoMessageWithHistory extends IAutoMessage {
    channelID: string;
    id: string;
    durationThreshold: number; // Date;
    messageThreshold: number;
    history: IAutoMessageHistory[];
}

export interface IAutoMessageCreationResult {
    ID: string;
}
