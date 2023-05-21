import classes from "./TaskList.module.css";

export default function TaskList({ resource }) {
  const tasks = resource.read();

  const taskList = tasks?.map((task) => (
    <li key={task.keyName} className={classes.tasklist__li}>
      {task.taskName}
    </li>
  ));

  return (
    <div className={classes.tasklist}>
      {tasks?.length === 0 && (
        <div className={classes.tasklist__tasknotfound_message}>
          No task found.
        </div>
      )}
      {tasks?.length > 0 && (
        <ul className={classes.tasklist__ul}>{taskList}</ul>
      )}
    </div>
  );
}
