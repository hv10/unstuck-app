import { createAction, createReducer } from "@reduxjs/toolkit";

const addTip = createAction("lasttips/add");
const removeTip = createAction("lasttips/remove");

export const lastTips = createReducer([], {
  [addTip]: (state, action) => {
    const tip = action.payload;
    state.push(tip);
  },
});
