export interface ISubAlerts {
    enabled: boolean;
    followerMessage: string;
    resubFiveMessage: string;
    resubFiveSmile: string;
    resubPrimeMessage: string;
    resubPrimeSmile: string;
    resubTenMessage: string;
    resubTenSmile: string;
    resubTwentyFiveMessage: string;
    resubTwentyFiveSmile: string;
    subFiveMessage: string;
    subPrimeMessage: string;
    subTenMessage: string;
    subTwentyFiveMessage: string;
}

export interface ISubAlertsHistory extends ISubAlerts {
    date: number; // Date;
    user: string;
    userID: string;
}

export interface ISubAlertsWithHistory extends ISubAlerts {
    channelID: string;
    history: ISubAlertsHistory[];
}
