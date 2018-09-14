
export default {
    request(config) {
        return fetch(config).then((data) => {
            return data.json();
        });
        // .catch((unparsederror) => {
        //     var error = JSON.parse(unparsederror);
        //     if (error.code == 401) {
        //         localStorage.setItem("redirect", m.route.get())''
        //         window.location.href = "/oauth/initiate"
        //     }
        //     throw error
        // })
    },
};
