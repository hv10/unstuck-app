import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { lastTips } from "./lastTips";

const reducer = combineReducers({ lastTips });

export default reducer;
