import { useEffect, useState } from "react";
import Form from "./components/Form";
import Task from "./components/Task";

const App = () => {

  const [taskArray, setTaskArray] = useState(() => {
    return JSON.parse(localStorage.getItem("taskArray")) || [];
  });

  const [task, setTasks] = useState("");
  const [isEditing, setIsEditing] = useState({});

  useEffect(() => {

   localStorage.setItem("taskArray", JSON.stringify(taskArray));

  }, [taskArray])

  return (
    <div className="h-dvh w-full relative bg-black flex items-center justify-center">
     
      <div className="todo-box">
      <h1 className="text-xl font-[500] text-center pb-2 text-white">My Todo</h1>
        <div className="relative w-full">
          <Form
            setTaskArray={setTaskArray}
            task={task}
            setTask={setTasks}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            taskArray={taskArray}
          />
        </div>
        <div className="relative w-full mt-2 flex flex-col gap-2">
          {taskArray.map(({ id, task, isDone }) => (
            <Task
              key={id}
              id={id}
              task={task}
              isDone={isDone}
              taskArray={taskArray}
              setTaskArray={setTaskArray}
              setTask={setTasks}
              setIsEditing={setIsEditing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
