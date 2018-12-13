export interface IVideoLibraryItem {
    videoID: string;
    length: number;
    tags: IVideoLibraryItemTag[];
    title: string;
    lastCheck: number;
    views: number;
    likes: number;
    dislikes: number;
}

export interface IVideoLibraryItemTag {
    tag: string;
    user: string;
    userID: string;
}

export interface IBannedTracks {
    items: IVideoLibraryItem[];
    count: number;
}
