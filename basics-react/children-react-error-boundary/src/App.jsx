import { useState } from "react";

function App() {
  const todo = [
    {
      title: "go to gym",
      done: false,
      id: 1,
    },
    {
      title: "swim",
      done: true,
      id: 2,
    },
  ];

  const todoValues = todo.map((item) => (
    <Todocomp  key={item.id}
     title={item.title} done={item.done} />
  ));
  return (
    <>{[
      <Todocomp/>
    ]
      }
    </>
  );
}

function Todocomp({ title, done }) {
  return;
  <div>
    {title} -{done ? "done" : "not done"}
  </div>;
}
export default App;
