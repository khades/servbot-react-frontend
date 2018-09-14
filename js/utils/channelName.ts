import appUrl from "./appUrl";
import auth from "./auth";
import States from "./states";

export default {
    channels: {},
    get(id) {
        if (!!this.channels[id]) {
            if (this.channels[id].state === States.READY) {
                return this.channels[id].name;

            }
            if (this.channels[id].state === States.LOADING) {
                return "LOADING";
            }
        } else {
            this.channels[id] = {
                name: "",
                states: States.LOADING,

            };
            auth.request({
                url: appUrl(`/api/channel/${id}/channelname`),
            }).then((result) => {
                this.channels[id] = {
                    name: result.channel,
                    state: States.READY,

                };
            }, (error) => {
                this.channels[id] = {
                    name: "NOT FOUND",
                    state: States.READY,
                };
            });
            return "LOADING";
        }
    },
};
