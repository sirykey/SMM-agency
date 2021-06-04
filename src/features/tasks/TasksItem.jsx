import React from 'react';
import { object } from 'prop-types';

function TasksItem({ task }) {
  return <div>{task.message}</div>;
}

TasksItem.propTypes = {
  task: object,
};
export default TasksItem;
