import * as actions from "./actioncreators";
import reducer, { SideMenuStates } from "./reducer";

describe("SideMenu reducer", () => {
    it("Should properly accept SHOW event from INIT", () => {
        expect(reducer(
            {
                state: SideMenuStates.INIT,
            }, actions.show())).toEqual({
                state: SideMenuStates.SHOWN,
            });
    });

    it("Should properly accept SHOW event from SHOW", () => {
        expect(reducer(
            {
                state: SideMenuStates.SHOWN,
            }, actions.show())).toEqual({
                state: SideMenuStates.SHOWN,
            });
    });

    it("Should properly accept SHOW event from HIDDEN", () => {
        expect(reducer(
            {
                state: SideMenuStates.HIDDEN,
            }, actions.show())).toEqual({
                state: SideMenuStates.SHOWN,
            });
    });

    it("Should properly accept HIDDEN event from INIT", () => {
        expect(reducer(
            {
                state: SideMenuStates.INIT,
            }, actions.hide())).toEqual({
                state: SideMenuStates.HIDDEN,
            });
    });

    it("Should properly accept HIDDEN event from SHOW", () => {
        expect(reducer(
            {
                state: SideMenuStates.SHOWN,
            }, actions.hide())).toEqual({
                state: SideMenuStates.HIDDEN,
            });
    });

    it("Should properly accept HIDDEN event from HIDDEN", () => {
        expect(reducer(
            {
                state: SideMenuStates.HIDDEN,
            }, actions.hide())).toEqual({
                state: SideMenuStates.HIDDEN,
            });
    });
});
