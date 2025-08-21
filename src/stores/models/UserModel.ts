import { types, flow } from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserModel = types
  .model('User', {
    name: types.optional(types.string, ''),
  })
  .actions(self => ({
    setName(name: string) {
      self.name = name;
      AsyncStorage.setItem('userName', name);
    },
    loadName: flow(function* () {
      const savedName = yield AsyncStorage.getItem('userName');
      if (savedName) self.name = savedName;
    }),
  }));
