import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import contactsReduser from "./reduser";

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export { store };
