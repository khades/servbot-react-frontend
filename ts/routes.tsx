import { generatePath } from "react-router";

export const ChannelIndex = "/channel/:id";

export const toChannelIndex = (id: string) => generatePath(ChannelIndex, { id });
