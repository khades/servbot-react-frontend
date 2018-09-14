export enum Routes {
    LOGS = 1,
    AUTOMESSAGES,
    SUBALERT,
    TEMPLATES,
    INDEX,
    CHANNEL,
    SUBSCRIPTIONS,
    BITS,
    EXTERNAL_SERVICES,
    SUBTRAIN,
    CHANNELBANS,
    SUBDAY,
    SONGREQUESTS,
    REDIRECT,
}

export const setRoute = (route) => ({
    route,
    type: "SET_ROUTE",
});
