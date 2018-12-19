import { call, put, select, takeLatest } from "redux-saga/effects";
import { IStore } from "../reducers";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IUserInfoGetAction } from "./actions";
import * as API from "./api";
import { IUserInfoState } from "./reducer";

export function* getUserInfo(action: IUserInfoGetAction) {
    const state: IStore = yield select();

    if (state.UserInfo.state !== States.NOTINITIATED) {
        return;
    }

    yield put(actions.loading());

    try {
        const userInfo: IUserInfoState = yield call(API.getUserInfo);
        yield put(actions.ready(userInfo));
    } catch (err) {
        switch (err.state) {
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized());
            default:
                return yield put(actions.offline());
        }
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getUserInfo);
}
