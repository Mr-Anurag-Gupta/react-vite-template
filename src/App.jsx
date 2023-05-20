import Heading from "./components/Heading/Heading";
import TaskDashboard from "./components/Tasks/TaskDashboard";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Heading />
      <TaskDashboard />
    </div>
  );
}

export default App;
