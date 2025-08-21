import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { addTodoSchema } from '@schemas/add-todo-schema/addTodoSchema';
import TextInputWithLabel from '@components/ui/text-input-with-label/TextInputWithLabel';
import AppButton from '@components/ui/app-button/AppButton';
import { spacing } from '@utils/spacing';
import { Props } from './props';
import { styles } from './styles';
import { textH2 } from '@styles/fonts';
import { formatDate } from '@utils/date';
import { globalStyles } from '@styles/global';
import { useGlobalModal } from '@providers/modal-providers/ModalProvider';
import { DateTimePicker } from '../date-time-picker/DateTimePicker';

export const AddTodo = ({ onSave, onCancel }: Props) => {
  const appStyles = styles;

  const { showModal, hideModal } = useGlobalModal();

  return (
    <View style={appStyles.container}>
      <Text style={{ ...appStyles.header, ...textH2 }}>New Todo</Text>
      <Formik
        initialValues={{ title: '', dueDate: new Date().toISOString() }}
        validationSchema={addTodoSchema}
        onSubmit={values => {
          onSave(values.title, values.dueDate);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => {
          return (
            <View style={{ gap: spacing.s32 }}>
              <View style={{ gap: spacing.s20 }}>
                <TextInputWithLabel
                  label="Title"
                  placeholder="This is todo title"
                  value={values.title}
                  onChangeText={handleChange('title')}
                  error={
                    errors.title && touched.title ? errors.title : undefined
                  }
                />

                <TouchableOpacity
                  onPress={() => {
                    showModal(
                      <DateTimePicker
                        date={new Date(values.dueDate)}
                        onCancel={() => {
                          hideModal();
                        }}
                        onConfirm={(date: Date) => {
                          setFieldValue('dueDate', date.toISOString());
                          hideModal();
                        }}
                      />,
                      {
                        animation: 'zoom',
                        paddingVertical: 0,
                        marginHorizontal: spacing.s32,
                      },
                    );
                  }}
                >
                  <TextInputWithLabel
                    label="Due Date"
                    placeholder="Select Due Date"
                    value={formatDate(
                      values.dueDate ? new Date(values.dueDate) : new Date(),
                    )}
                    editable={false}
                  />
                </TouchableOpacity>
              </View>

              <View style={[{ gap: spacing.s12 }, appStyles.buttonContainer]}>
                <View style={globalStyles.rowBetween}>
                  <AppButton
                    title="Save"
                    style={appStyles.button}
                    onPress={handleSubmit}
                  />
                </View>
                <View style={globalStyles.rowBetween}>
                  <AppButton
                    title="Cancel"
                    variant="accent"
                    style={appStyles.button}
                    onPress={() => {
                      onCancel();
                    }}
                  />
                </View>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};
