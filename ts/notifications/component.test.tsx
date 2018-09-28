import * as React from "react";
import { create } from "react-test-renderer";
import Notifications, { INotificationsProps } from "./component";

describe("Notifications", () => {
    it("should render properly  ", () => {
        const props: INotificationsProps = {
            hideNotification: (id) => id,

            notifications: [{
                body: "AAAAAA",
                date: new Date(),
                id: "222",
            }, {
                body: "BBBB",
                date: new Date(),
                id: "333",
            }, {
                body: "CCCCCCC",
                date: new Date(),
                id: "444",
            }],
        };
        const notifications = create(
            <Notifications {...props} />,
        );
        expect(notifications.toJSON()).toMatchSnapshot();

        const newProps: INotificationsProps = {
            hideNotification: (id) => id,

            notifications: [{
                body: "AAAAAA",
                date: new Date(),
                id: "222",
            }, {
                body: "BBBB",
                date: new Date(),
                id: "333",
            }],
        };
        notifications.update(
            <Notifications {...newProps} />);
        expect(notifications.toJSON()).toMatchSnapshot();

    });

    it("should properly hide notificaiton", () => {
        let hiddenNotification = "";
        const notificationToHide = "333";
        const props: INotificationsProps = {
            hideNotification: (id) => hiddenNotification = id,

            notifications: [{
                body: "AAAAAA",
                date: new Date(),
                id: "222",
            }, {
                body: "BBBB",
                date: new Date(),
                id: "333",
            }, {
                body: "CCCCCCC",
                date: new Date(),
                id: "444",
            }],
        };
        const notifications = create(
            <Notifications {...props} />,
        );
        const notification = notifications.root.findAll((el) => {
            return el.props["data-id"] === notificationToHide;
        });
        notification[0].props.onClick({ currentTarget: { dataset: { id: notificationToHide } } });
        expect(hiddenNotification).toEqual(notificationToHide);
    });
});
