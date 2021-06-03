import React from "react";
import DishForm from "./pages/DishForm";

const App = () => {
  const handleSubmit = (val) => console.log(val);
  return (
    <main>
      <DishForm onSubmit={handleSubmit} />
    </main>
  );
};

export default App;
