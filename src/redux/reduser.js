import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from "./actions";

const items = createReducer([], {
  [actions.fetchContactsSuccess.type]: (_, { payload }) => payload,
  [actions.addContactsSuccess.type]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [actions.deleteContactSuccess.type]: (state, { payload }) =>
    state.filter((element) => element.id !== payload),
});

const filter = createReducer("", {
  [actions.filterContacts.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest.type]: () => true,
  [actions.fetchContactsSuccess.type]: () => false,
  [actions.fetchContactsError.type]: () => false,
  [actions.addContactsRequest.type]: () => true,
  [actions.addContactsSuccess.type]: () => false,
  [actions.addContactsError.type]: () => false,
  [actions.deleteContactRequest.type]: () => true,
  [actions.deleteContactSuccess.type]: () => false,
  [actions.deleteContactError.type]: () => false,
});
const error = createReducer("", {
  [actions.fetchContactsError.type]: (_, { payload }) => payload,
  [actions.addContactsError.type]: (_, { payload }) => payload,
  [actions.deleteContactError.type]: (_, { payload }) => payload,
  [actions.fetchContactsRequest.type]: () => null,
  [actions.addContactsRequest.type]: () => null,
  [actions.deleteContactRequest.type]: () => null,
});
export default combineReducers({
  items,
  filter,
  loading,
  error,
});
