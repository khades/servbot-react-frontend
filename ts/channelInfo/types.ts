import { IVkGroupInfo } from "../externalservices/types";
import { ISubTrain } from "../subtrain/types";

export interface ICurrentSongRequest {
    count: number;
    duration: string;
    id: string;
    isPlaying: boolean;
    link: string;
    title: string;
    user: string;
    volume: number;
}

export interface IGamesHistory {
    game: string;
    gameID: string;
    start: string;
}

export interface IStreamStatus {
    game: string;
    gameID: string;
    gamesHistory: IGamesHistory[];
    lastOnlineTime: string;
    online: boolean;
    start: string;
    title: string;
    viewers: number;
}

export interface IChannelInfo {
    channel: string;
    channelId: string;
    commands: string[];
    enabled: boolean;
    extendedBansLogging: boolean;
    lang: string;
    mods: string[];
    songRequest: ICurrentSongRequest;
    streamStatus: IStreamStatus;
    subTrain: ISubTrain;
    subdayIsActive: boolean;
    vkGroupInfo: IVkGroupInfo;
}
