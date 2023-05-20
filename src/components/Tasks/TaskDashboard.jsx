import TaskList from "./TaskList";
import classes from "./TaskDashboard.module.css";

export default function TaskDashboard() {
  return (
    <div className={classes.taskdashboard}>
      <TaskList />
    </div>
  );
}
