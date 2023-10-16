import { createAction, createReducer } from "@reduxjs/toolkit"

const add = createAction('add to cart');
const clear = createAction('clear cart');

const actions = {add, clear};

const initialState = [];

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(add, (state, action) => state.push('Movie'))
        .addCase(clear, (state, action) => [])
});

export { reducer, actions };
