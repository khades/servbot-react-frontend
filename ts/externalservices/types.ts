export interface IVkGroupInfoForm {
    groupName: string;
    notifyOnChange: boolean;
}

export interface IVkGroupInfo extends IVkGroupInfoForm {
    lastMessageBody: string;
    lastMessageDate: string;
    lastMessageID: number;
    lastMessageURL: string;
}

export interface IChannelExternalServices {
    vkGroupInfo: IVkGroupInfo;
}
