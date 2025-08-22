import AppScreenWrapper from '@components/ui/app-screen-wrapper/AppScreenWrapper';
import { globalStyles } from '@styles/global';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { label1, textH1 } from '@styles/fonts';
import { useHome } from '@hooks/useHome';
import { responsiveWidth } from '@utils/dimensions';
import { AppPulseLogo } from '@components/ui/app-pulse-button/AppPulseButton';
import { TodoItem } from '@components/ui/todo-item/TodoItem';
import { spacing } from '@utils/spacing';
import { observer } from 'mobx-react-lite';
import { Colors } from '@styles/colors';

const HomeScreen = observer(() => {
  const appStyles = styles;
  const { userStore, todoStore, onAddTodo, onLogout } = useHome();
  return (
    <AppScreenWrapper
      barStyle="light-content"
      statusBarBg={Colors.bgPrimary}
      containerStyle={appStyles.container}
      contentStyle={{
        ...globalStyles.flexTop,
        ...{ width: responsiveWidth() },
      }}
      scrollable={false}
    >
      <View style={{ marginBottom: spacing.s56 }}>
        <View style={[globalStyles.rowBetween, appStyles.header]}>
          <Text style={{ ...textH1 }}>{`Hi, ${
            userStore.currentUser && userStore.currentUser.name
              ? userStore.currentUser.name
              : 'Guest'
          }`}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={onLogout}>
            <Text style={{ ...label1, ...globalStyles.errorText }}>Logout</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todoStore.getTodosByUser(`${userStore.currentUser?.name}`)}
          keyExtractor={item => item.id}
          style={{}}
          contentContainerStyle={{
            paddingHorizontal: spacing.s32,
            paddingTop: spacing.s12,
            paddingBottom: spacing.s72,
          }}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onDone={() => todoStore.markDone(item.id)}
              onDelete={() => todoStore.removeTodo(item.id)}
            />
          )}
        />
      </View>
      <AppPulseLogo
        size={75}
        iconSize={37}
        containerStyle={appStyles.add}
        onPress={onAddTodo}
      />
    </AppScreenWrapper>
  );
});

export default HomeScreen;
