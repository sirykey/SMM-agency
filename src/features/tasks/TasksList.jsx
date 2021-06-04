import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TasksItem from './TasksItem';
import { fetchTasks } from './tasksSlice';

function TasksList(props) {
  const tasks = useSelector((state) => state.tasksSlice.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {tasks.map((task) => {
        return <TasksItem task={task} />;
      })}
    </div>
  );
}

export default TasksList;
