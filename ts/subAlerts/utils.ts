import { ISubAlerts } from "../api/types";

export const isExtended = (object: ISubAlerts): boolean => {
    return object.subPrimeMessage !== "" ||
        object.subTenMessage !== "" ||
        object.subTwentyFiveMessage !== "" ||
        object.resubPrimeMessage !== "" ||
        object.resubTenMessage !== "" ||
        object.resubTwentyFiveMessage !== "";
};
