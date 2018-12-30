import * as React from "react";
import { create } from "react-test-renderer";
import NotificationsComponent, { INotificationsProps } from "./component";

describe("Notifications", () => {
    it("should render properly  ", () => {
        const props: INotificationsProps = {
            autohideNotifications: () => null,
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
            <NotificationsComponent {...props} />,
        );
        expect(notifications.toJSON()).toMatchSnapshot();

        const newProps: INotificationsProps = {
            autohideNotifications: () => null,
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
            <NotificationsComponent {...newProps} />);
        expect(notifications.toJSON()).toMatchSnapshot();

    });

    it("should properly hide notificaiton", () => {
        let hiddenNotification = "";
        const notificationToHide = "333";
        const props: INotificationsProps = {
            autohideNotifications: () => null,
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
            <NotificationsComponent {...props} />,
        );
        const notification = notifications.root.findAll((el) => {
            return el.props["data-id"] === notificationToHide;
        });
        notification[0].props.onClick({ currentTarget: { dataset: { id: notificationToHide } } });
        expect(hiddenNotification).toEqual(notificationToHide);
    });
});
