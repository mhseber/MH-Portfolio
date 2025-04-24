import React from "react";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
  return (
    <div>
      <h1
        id="projects"
        className="flex gap-2 pl-5 mb-12 text-4xl font-semibold underline"
      >
        <GoProjectSymlink className="text-red-500" />
        Projects
      </h1>
      
    </div>
  );
};

export default Projects;
