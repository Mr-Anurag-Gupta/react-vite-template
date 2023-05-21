import { useState, useEffect } from "react";
import Loading from "../../ui/Loader/Loading";
import classes from "./TaskList.module.css";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      let data = await fetch(
        "https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager.json"
      ).then((response) => response.json());

      let tasks = [];
      for (let key in data) {
        const { taskId, taskName, completed } = data[key];
        tasks = [...tasks, { keyName: key, taskId, taskName, completed }];
      }

      return tasks;
    };
    fetcher().then((tasks) => {
      setTimeout(() => {
        setTasks(tasks);
        setLoading(false);
      }, 2000);
    });
  }, []);

  const taskList = tasks.map((task) => (
    <li key={task.keyName} className={classes.tasklist__li}>
      {task.taskName}
    </li>
  ));

  return (
    <div className={classes.tasklist}>
      {loading && <Loading />}
      {!loading && tasks?.count === 0 && (
        <div className={classes.tasklist__tasknotfound_message}>
          No task found.
        </div>
      )}
      {!loading && <ul className={classes.tasklist__ul}>{taskList}</ul>}
    </div>
  );
}
