import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction("fetchContactsRequest");
export const fetchContactsSuccess = createAction("fetchContactsSuccess");
export const fetchContactsError = createAction("fetchContactsError");

export const addContactsRequest = createAction("addContactsRequest");
export const addContactsSuccess = createAction("addContactsSuccess");
export const addContactsError = createAction("addContactsError");

export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactError");

export const filterContacts = createAction("filterContacts");
