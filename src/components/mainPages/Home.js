import React from "react";
import ProjectOne from "../comps/ProjectOne";
import ProjectTwo from "../comps/ProjectTwo";
import ProjectThree from "../comps/ProjectThree";
import ProjectFour from "../comps/ProjectFour";

function Home() {
  return (
    <div>
      <h1>home page</h1>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
    </div>
  );
}

export default Home;
