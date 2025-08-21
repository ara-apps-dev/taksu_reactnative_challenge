import React, { useState } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import AppButton from '@components/ui/app-button/AppButton';
import { Props } from './props';
import { styles } from './styles';

export const DateTimePicker = ({ date, onCancel, onConfirm }: Props) => {
  const appStyles = styles;
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <View style={appStyles.container}>
      <DatePicker
        date={selectedDate}
        mode="datetime"
        theme="dark"
        onDateChange={setSelectedDate}
      />
      <View style={appStyles.buttonRow}>
        <AppButton
          title="Cancel"
          variant="accent"
          style={appStyles.button}
          onPress={onCancel}
        />
        <AppButton
          title="Confirm"
          variant="success"
          style={appStyles.button}
          onPress={() => onConfirm(selectedDate)}
        />
      </View>
    </View>
  );
};
