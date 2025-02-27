import Button from "./Button";

const Task = ({
  task = "My task",
  isDone = true,
  id,
  taskArray = [],
  setTaskArray,
  setTask,
  setIsEditing,
}) => {

  const handelTaskIsDone = () => {
    taskArray.find((tasks) => {
      if (tasks.id=== id) {
        tasks.isDone =  !tasks.isDone;
      }
    });
    setTaskArray([...taskArray]);
  };

  const handelDeleteTask = () => {
    const deletedArray = taskArray.filter((tasks) => tasks.id !== id)
    setTaskArray(deletedArray);
  }

  const handelUpdate = () => {
    const updateTask = taskArray.find((tasks) => tasks.id === id)
    setTask(updateTask.task);
    setIsEditing(updateTask)
  }

  return (
    <div className="task">
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={handelTaskIsDone}
      >
        <h1
          className={`text-lg font-semibold text-white ${
            isDone
              ? "line-through decoration-2 decoration-red-500 decoration-wavy "
              : ""
          }`}
        >
          {task}
        </h1>
      </div>
      <div className="flex gap-2">
        <Button className="bg-red-500 font-bold" onclick={handelDeleteTask}>Del</Button>
        <Button className="bg-amber-600 font-bold " onclick={handelUpdate}>Edit</Button>
      </div>
    </div>
  );
};

export default Task;
