export interface ISubTrainForm {
    appendTemplate: string;
    enabled: boolean;
    expirationLimit: number;
    notificationLimit: number;
    notificationTemplate: string;
    onlyNewSubs: boolean;
    timeoutTemplate: string;
}

export interface ISubTrain extends ISubTrainForm {
    expirationTime: string;
    notificationTime: string;
    onlyNewSubs: boolean;
    token: string;
    users?: string[];
    currentStreak: number;
}
