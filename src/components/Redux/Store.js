import { createStore } from "@reduxjs/toolkit";
import userAction from "./Action/Action";

const store = createStore(userAction);
export default store;