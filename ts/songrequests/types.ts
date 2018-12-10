
export interface ISongRequestsSettings {
    allowOffline: boolean;
    bannedTags: string[];
    maxRequestsPerUser: number;
    maxVideoLength: number;
    minVideoLength: number;
    moreLikes: boolean;
    onlySubs: boolean;
    playlistLength: number;
    skipIfTagged: boolean;
    videoViewLimit: number;
    volume: number;
}

export interface ISongRequest {
    date: string;
    dislikes: number;
    length: number;
    likes: number;
    order: number;
    tags: string[];
    title: string;
    user: string;
    userID: string;
    videoID: string;
    views: number;
}

export interface ISongRequests {
    isMod: boolean;
    isOwner: boolean;
    requests: ISongRequest[];
    settings: ISongRequestsSettings;
}
