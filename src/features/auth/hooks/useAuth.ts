import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootState } from '@/store';

const selectAuth = (state: RootState) => state.auth;

const selectCurrentUser = createSelector(selectAuth, state => state.user);

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
