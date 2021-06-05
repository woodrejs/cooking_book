import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <h1>Home</h1>
        <button>
          <Link to="/form">Start</Link>
        </button>
      </div>
    </section>
  );
};
export default Home;
