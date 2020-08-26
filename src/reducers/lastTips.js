import { createAction, createReducer } from "@reduxjs/toolkit";

const addTip = createAction("lasttips/add");
const removeTip = createAction("lasttips/remove");

export const lastTips = createReducer([], {
  [addTip]: (state, action) => {
    // This push() operation gets translated into the same
    // extended-array creation as in the previous example.
    const tip = action.payload;
    state.push(tip);
  },
});
