import React from "react";
import { useSelector, useDispatch } from "react-redux";

// common components
import SeparateHeader from "../shared/others/SeparateHeader";

// Redux
import { fetchRepository } from "../../redux/features/repoSlice";

// Styles
import "../../assets/styles/repository.css";

function RepositoryComponent() {
  const dispatch = useDispatch();
  const repositoryData = useSelector((state) => state.repository);

  React.useEffect(() => {
    repositoryData.status === "pending" && dispatch(fetchRepository());
  }, [repositoryData, dispatch]);

  return (
    <div className="row  my-4">
      <SeparateHeader headerName={"Github Repositories"} />
      {repositoryData.data && repositoryData.data.length > 0 ? (
        repositoryData.data.map((repository, rpsIdx) => {
          return (
            <div key={rpsIdx} className="col-md-6 col-lg-4 my-2 mb-3">
              <div
                onClick={() => window.open(repository.html_url, "_blank")}
                className="github-card shadow-sm p-3"
                data-github={repository.fullname}
              >
                <h3>{repository.name}</h3>
                <span className="github-card__desc">
                  {repository.description}
                </span>
                <span className="github-card__meta">
                  🌐 {repository.language}
                </span>
                <span className="github-card__meta">
                  ⭐ {repository.stargazers_count}
                </span>
                <span className="github-card__meta">
                  ⚓ {repository.forks_count}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-secondary py-5">
          <div className="spinner-grow" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      <div className="col-md-6 col-lg-3 my-2 mb-3">
        <div
          onClick={() =>
            window.open(
              "https://github.com/waiphyo285?tab=repositories",
              "_blank"
            )
          }
          className="github-card shadow-sm p-3"
        >
          <div className="github-card__center">
            <span className="bi bi-link-45deg"> View all</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryComponent;
