import React from "react";
import { useSelector, useDispatch } from "react-redux";

// project components
import ButtonList from "../shared/projects/ButtonList";
import CarouselInner from "../shared/projects/CarouselInner";
import PrevNextButton from "../shared/projects/PrevNextButton";

// common components
import SeparateHeader from "../shared/others/SeparateHeader";

// Redux
import { fetchProject } from "../../redux/features/projectSlice";

// Styles
import "../../assets/styles/project.css";

function ProjectComponent() {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.project);

  React.useEffect(() => {
    if (projectData.status === "pending") {
      dispatch(fetchProject());
    }
  }, [projectData, dispatch]);

  return (
    <div className="row my-4">
      <SeparateHeader headerName={"My Team Projects"} />
      {projectData.data && projectData.data.length > 0 ? (
        <ol className="project">
          {projectData.data.map((project, pjIdx) => {
            return (
              project.show && (
                <li key={pjIdx} className="project-item col-12">
                  <h3
                    onClick={() =>
                      window.open(project.buttons[0].link, "_blank")
                    }
                  >
                    {project.title}
                  </h3>
                  <p className="px-2 text-secondary"> {project.description}</p>
                </li>
              )
            );
          })}
        </ol>
      ) : (
        <div className="text-center text-secondary py-5">
          <div className="spinner-grow" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectComponent;

{
  /* <div>
      <div
        id={`carouselIndicator-${pjIdx}`}
        className="carousel slide mt-4"
        data-bs-ride="carousel"
      >
        <CarouselInner project={project} />
        <PrevNextButton projectId={pjIdx} />
    

      <div className="d-grid gap-2 mt-2 text-center">
        <span>{project.title}</span>
        <ButtonList buttons={project.buttons} />
      </div>
    </div> */
}
