import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  user: string | null;
  token: string | null;
};

function createInitialState(): AuthState {
  return { user: null, token: null };
}

const name = 'auth';
const initialState = createInitialState();

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }: PayloadAction<{ user: string; token: string }>) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { reducer: authReducer, actions: authActions } = slice;
