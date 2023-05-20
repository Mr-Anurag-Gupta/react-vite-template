import classes from "./Heading.module.css";

export default function Heading() {
  return (
    <div className={classes.heading__container}>
      <h2 className={classes.heading__text}>Task Manager</h2>
    </div>
  );
}
