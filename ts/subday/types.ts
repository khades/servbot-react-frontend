export interface ISubDay {
    channelID: string;
    date: string;
    id: string;
    name: string;
    isActive: boolean;
}

export interface ISubDayVote {
    user: string;
    userid: string;
    game: string;
    isSub: true;
}

export interface ISubDayFull extends ISubDay {
    subsOnly: boolean;
    closer: string;
    votes: ISubDayVote[];
    winners: ISubDayVote[];
    isMod: boolean;
}
