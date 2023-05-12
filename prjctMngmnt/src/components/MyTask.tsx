import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {ICONS} from '../resources';

const PersonalTask = ({task, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.taskContainer}>
        <View style={styles.task}>
          <Image source={ICONS.ACCOUNT_TAB_ICON} style={styles.taskIcon} />
          <Text
            style={[styles.taskTitle, task.completed && styles.taskCompleted]}>
            {task.name}
          </Text>
        </View>
        <Text style={styles.taskDue}>{`Due ${task.dueDate}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  taskDue: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
});

export default PersonalTask;
