function CompletedTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="page">
      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <div className="card">
          <h2>No Completed Tasks</h2>
          <p>You don't have any completed tasks yet.</p>
        </div>
      ) : (
        completedTasks.map((task) => (
          <div className="card" key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CompletedTasks;