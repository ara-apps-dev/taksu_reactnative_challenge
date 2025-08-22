import { types } from 'mobx-state-tree';

// User model
export const UserModel = types.model('User', {
  name: types.identifier, // unique
});
