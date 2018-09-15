import API from "../api/api";

const time = {
    getTime() {
        API.getTime()

        .then((response) => {
            const serverDate = new Date(response.time);
            const localDate = new Date();
            this.offset = serverDate.getTime() - localDate.getTime();
        });
    },
    now() {
        return new Date(new Date().getTime() + this.offset);
    },
};

export default time;
