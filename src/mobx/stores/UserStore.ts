import AsyncStorage from '@react-native-async-storage/async-storage';
import { cast, flow, types } from 'mobx-state-tree';
import { UserModel } from 'mobx/models/UserModel';

// Users store: simpan semua user + current user
export const UsersStore = types
  .model('UsersStore', {
    users: types.array(UserModel),
    currentUser: types.maybeNull(types.reference(UserModel)), // bisa null
  })
  .actions(self => ({
    // Set current user by name
    setCurrentUser(name: string) {
      let user = self.users.find(u => u.name === name);

      if (!user) {
        // create proper MST node using UserModel
        user = UserModel.create({ name });
        self.users.push(user);
      }

      self.currentUser = user; // reference sekarang valid
      this.saveUsers();
    },

    // Persist all users + current user to AsyncStorage
    saveUsers: flow(function* () {
      try {
        const snapshot = {
          users: self.users,
          currentUser: self.currentUser ? self.currentUser.name : null,
        };
        yield AsyncStorage.setItem('users', JSON.stringify(snapshot));
      } catch (e) {
        console.error('Failed to save users', e);
      }
    }),

    // Load users from AsyncStorage
    loadUsers: flow(function* () {
      try {
        const saved = yield AsyncStorage.getItem('users');
        if (saved) {
          const parsed = JSON.parse(saved);
          self.users = cast(parsed.users || []);
          if (parsed.currentUser) {
            const user = self.users.find(u => u.name === parsed.currentUser);
            if (user) self.currentUser = user;
          }
        }
      } catch (e) {
        console.error('Failed to load users', e);
      }
    }),

    // Logout current user
    logout() {
      self.currentUser = null;
      this.saveUsers();
    },
  }));
