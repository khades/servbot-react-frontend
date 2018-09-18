import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api/api";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IUserInfoGetAction } from "./actions";
import { IUserInfoState } from "./reducer";

export function* getUserInfo(action: IUserInfoGetAction) {
    const state: IUserInfoState = yield select();

    if (state.state !== States.NOTINITIATED) {
        return;
    }

    yield put(actions.loading());

    try {
        const userInfo: IUserInfoState = yield call(API.getUserInfo);
        yield put(actions.ready(userInfo));
    } catch (err) {
        yield put(actions.notAuthorized());
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getUserInfo);
}
