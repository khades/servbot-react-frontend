import { call, put, select, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { ITemplate } from "../api/types";
import { IStore } from "../reducers";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, ITemplatesGetAction } from "./actions";

export function* getTemplates(action: ITemplatesGetAction) {
    const state: IStore = yield select();

    if (state.templates.channelID === action.payload.channelID) {
        return null;
    }

    yield put(actions.loading(action.payload.channelID));

    try {
        const content: ITemplate[] = yield call(API.getTemplates, action.payload.channelID);
        yield put(actions.ready(action.payload.channelID, content));
    } catch (err) {
        switch (err) {
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID));
            default:
                return yield put(actions.offline(action.payload.channelID));
        }
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getTemplates);
}
