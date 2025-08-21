import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { AppPulseLogo } from '../app-pulse-button/AppPulseButton';
import { globalStyles } from '@styles/global';
import { spacing } from '@utils/spacing';
import AppButton from '../app-button/AppButton';
import { observer } from 'mobx-react-lite';
import { Props, statusColors } from './props';
import { formatDate } from '@utils/date';
import { Colors } from '@styles/colors';

export const TodoItem: React.FC<Props> = observer(
  ({ todo, onDone, onDelete }) => {
    const appStyles = styles;

    const status = todo.isDone
      ? 'DONE'
      : new Date(todo.dueDate) < new Date()
      ? 'OVERDUE'
      : 'OPEN';

    return (
      <View style={appStyles.container}>
        <View style={appStyles.header}>
          <View
            style={[appStyles.badge, { backgroundColor: statusColors[status] }]}
          >
            <Text
              style={{
                ...appStyles.badgeText,
                ...{
                  color:
                    status === 'OPEN' ? Colors.textPrimary : Colors.textWhite,
                },
              }}
            >
              {status}
            </Text>
          </View>
          <AppPulseLogo
            icon="trash"
            iconSize={13.18}
            iconColor={Colors.iconWhite}
            radius={5}
            containerStyle={appStyles.delete}
            onPress={() => {
              onDelete && onDelete();
            }}
          />
        </View>
        <Text style={appStyles.title}>{todo.title}</Text>
        <View style={[globalStyles.rowBetween, { gap: spacing.s12 }]}>
          <View style={{}}>
            <Text style={appStyles.dueDate}>{`Due date:\n${formatDate(
              new Date(todo.dueDate),
            )}`}</Text>
          </View>
          {status !== 'DONE' && (
            <AppButton
              title={'DONE'}
              onPress={() => {
                onDone && onDone();
              }}
            />
          )}
        </View>
      </View>
    );
  },
);
