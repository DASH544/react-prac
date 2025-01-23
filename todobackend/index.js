import express, { json } from "express";
const app = express();
let todo = [
  {
    id: "22",
    desc: "Go to Gym",
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  const getTodo = todo;
  res.status(200).json(getTodo);
});
app.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo.id = Math.floor(Math.random() * 101);
  console.log(newTodo);
  todo.push(newTodo);
  res.status(200).json({
    message: "Data Saved",
  });
});

app.put("/", (req, res) => {
  const updateTodo = req.body;
  if (!updateTodo || !updateTodo.id) {
    return res.status(400).json({ message: "Invalid data format" });
  }
  const todoItem = todo.find((item) => item.id == updateTodo.id);
  if (todoItem) {
    todoItem.desc = updateTodo.desc;
    res.status(200).json({
      message: "Todo Updated Successfully",
    });
  } else {
    res.status(404).json({
      message: "Todo Item Not Found",
    });
  }
});
app.delete("/", (req, res) => {
  const delTodo = req.body;
  const todoIndex = todo.findIndex((item) => item.id == delTodo.id);
  if (todoIndex !== -1) {
    todo.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo Deleted Successfully" });
  } else {
    res.status(404).json({ message: "Todo Item Not Found" });
  }
});

app.listen(3000);
