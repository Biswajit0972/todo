
import Button from "./Button";
import Input from "./Input";

const Form = ({setTaskArray, task,  setTask, isEditing, setIsEditing, taskArray}) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing.id) {
      taskArray.find((tasks) => {
        if(tasks.id === isEditing.id) {
          tasks.task = task;
          setIsEditing({});
        }
      })

      setTaskArray([...taskArray]);
      return;
    }
    if (task.trim() === "" || task.length  <  2) {
      alert("Task should be atleast 2 characters long");
      return;
    }
    const taskObject = {
      id: new Date().getTime().toString(),
      task: task,
      isDone: false,
    };
    setTaskArray((prev) => [...prev, taskObject]);
    setTask("");
  };
  
  return (
    <form className="flex items-center gap-3 w-full" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a new task"
        className="w-[70%]"
        task={task}
        setTask={setTask}
        name="query"
      />
      <Button type="submit" className="bg-green-500 cursor-pointer">
        {" "}
        Add{" "}
      </Button>
    </form>
  );
};

export default Form;
