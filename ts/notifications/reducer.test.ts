import * as actions from "./actioncreators";
import reducer from "./reducer";

describe("Notification reducer", () => {
    it("Should properly accept ADD event", () => {
        expect(reducer([], actions.add("Hello")).length).toEqual(1);
    });
    it("Should properly accept ADD event when type present, but doesnt match", () => {
        expect(reducer([
            {
                body: "Hello",
                date: new Date(),
                id: "4",
                type: "Some",
            }], actions.add("Hello", [], "Other")).length).toEqual(2);
    });
    it("Should properly accept ADD event when type present, and matches new Type", () => {
        expect(reducer([
            {
                body: "Hello",
                date: new Date(),
                id: "4",
                type: "Some",
            }], actions.add("Hello", [], "Some")).length).toEqual(1);
    });
    it("Should properly accept HIDE event if notification with that id exists", () => {
        expect(reducer([
            {
                body: "Hello",
                date: new Date(),
                id: "4",
                type: "Some",
            }], actions.hide("4")).length).toEqual(0);
    });
    it("Should properly accept HIDE event if notification with that id doesnt exist", () => {
        expect(reducer([
            {
                body: "Hello",
                date: new Date(),
                id: "4",
                type: "Some",
            }], actions.hide("3")).length).toEqual(1);
    });
    it("Autohide features show work properly", () => {
        const date: Date = new Date();
        expect(reducer([
            {
                body: "Hello",
                date: new Date(date.getTime() - 1000 - actions.NotificationTimeout),
                id: "3",
                type: "Some",
            },
            {
                body: "Hello",
                date,
                id: "2",
                type: "Some",
            },
            {
                body: "Hello",
                date,
                id: "4",
                type: "Some",
            }], actions.autohide()).length).toEqual(2);
    });
});
