import { call, put, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { ISubDayFull } from "../api/types";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import {
    actiontypes,
    ISubDayCloseAction,
    ISubDayGetAction,
    ISubDayPickNonSubWinnerAction,
    ISubDayPickSubWinnerAction,
    ISubDayPickWinnerAction,
    ISubDayPullWinnerAction,
} from "./actions";

export function* getSubDay(action: ISubDayGetAction) {
    const channelID = action.payload.channelID;
    const id = action.payload.id;
    if (action.payload.init === true) {
        yield put(actions.loading(channelID, id));
    }
    try {
        const content: ISubDayFull = yield call(API.getSubDay, channelID, id);
        yield put(actions.ready(channelID, id, content));
    } catch (err) {
        switch (err.state) {
            case States.NOTFOUND:
                return yield put(actions.notFound(channelID, id));
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(channelID, id));
            case States.FORBIDDEN:
                return yield put(actions.forbidden(channelID, id));
            default:
                return yield put(actions.offline);
        }
    }
}

export function* pickWinner(action: ISubDayPickWinnerAction) {
    const channelID = action.payload.channelID;
    const id = action.payload.id;

    yield put(actions.loading(channelID, id));
    yield call(API.pickSubDayWinner, channelID, id);
    yield call(getSubDay, actions.get(channelID, id));

}

export function* pickSubWinner(action: ISubDayPickSubWinnerAction) {
    const channelID = action.payload.channelID;
    const id = action.payload.id;

    yield put(actions.loading(channelID, id));
    yield call(API.pickSubDaySubWinner, channelID, id);
    yield call(getSubDay, actions.get(channelID, id));
}

export function* pickNonSubWinner(action: ISubDayPickNonSubWinnerAction) {
    const channelID = action.payload.channelID;
    const id = action.payload.id;

    yield put(actions.loading(channelID, id));
    yield call(API.pickSubDayNonSubWinner, channelID, id);
    yield call(getSubDay, actions.get(channelID, id));
}

export function* close(action: ISubDayCloseAction) {
    const channelID = action.payload.channelID;
    const id = action.payload.id;

    yield put(actions.loading(channelID, id));
    yield call(API.closeSubDay, channelID, id);
    yield call(getSubDay, actions.get(channelID, id));
}

export function* pullWinner(action: ISubDayPullWinnerAction) {
    const channelID = action.payload.channelID;
    const id = action.payload.id;
    const user = action.payload.user;

    yield put(actions.loading(channelID, id));
    yield call(API.pullSubDayWinner, channelID, id, user);
    yield call(getSubDay, actions.get(channelID, id));
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getSubDay);
    yield takeEvery(actiontypes.PICKWINNER, pickWinner);
    yield takeEvery(actiontypes.PICKSUBWINNER, pickSubWinner);
    yield takeEvery(actiontypes.PICKNONSUBWINNER, pickNonSubWinner);
    yield takeEvery(actiontypes.CLOSE, close);
    yield takeEvery(actiontypes.PULLWINNER, pullWinner);

}
