class FetchUtils {
  fetchTasks = async () => {
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
}

const fetchUtils = new FetchUtils();
export { fetchUtils };
