import TaskList from "./TaskList";
import classes from "./TaskDashboard.module.css";
import { Suspense } from "react";
import { suspenseUtils } from "../../utils/SuspenseUtils";
import { fetchUtils } from "../../utils/FetchUtils";
import Loading from "../../ui/Loader/Loading";

export default function TaskDashboard() {
  const resource = suspenseUtils.wrapPromise(fetchUtils.fetchTasks());
  return (
    <div className={classes.taskdashboard}>
      <Suspense fallback={<Loading />}>
        <TaskList resource={resource} />
      </Suspense>
    </div>
  );
}
