import { call, put, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { ITemplate, ITemplateWithHistory } from "../api/types";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, ITemplateGetAction, ITemplateSaveAction, ITemplateSetAliasToAction } from "./actions";

export function* getTemplate(action: ITemplateGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID, action.payload.commandName));
    }
    try {
        const content: ITemplateWithHistory = yield call(
            API.getTemplate,
            action.payload.channelID,
            action.payload.commandName);
        yield put(actions.ready(action.payload.channelID, action.payload.commandName, content));
    } catch (err) {
        switch (err) {
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID, action.payload.commandName));
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID, action.payload.commandName));
            default:
                return yield put(actions.offline(action.payload.channelID, action.payload.commandName));
        }
    }
}

export function* saveTemplate(action: ITemplateSaveAction) {
    try {
        yield call(API.saveTemplate, action.payload.channelID, action.payload.commandName, action.payload.template);
        yield call(getTemplate, actions.get(action.payload.channelID, action.payload.commandName));
        yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    } catch (err) {
        yield put(notificationActions.add(l10n.TEMPLATE_BODY_ERROR));
        yield put(actions.afterSaveError(action.payload.channelID, action.payload.commandName));
    }
}

export function* setTemplateTemplateTo(action: ITemplateSetAliasToAction) {
    try {
        yield call(API.setTemplateAliasTo,
            action.payload.channelID,
            action.payload.commandName,
            action.payload.aliasTo);
        yield call(getTemplate, actions.get(action.payload.channelID, action.payload.commandName));
        yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    } catch (err) {
        yield put(notificationActions.add(l10n.TEMPLATE_BODY_ERROR));
        yield put(actions.afterSaveError(action.payload.channelID, action.payload.commandName));
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getTemplate);
    yield takeEvery(actiontypes.SAVE, saveTemplate);
    yield takeEvery(actiontypes.SETALIASTO, setTemplateTemplateTo);

}
