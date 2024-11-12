import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./EditFormModal.css";

const EditDataModalComponent = () => {
  const navigate = useNavigate();

  const authData = useSelector((state) => state.auth);

  const [formData, setFormData] = React.useState({
    serviceType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      serviceType: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("closeModal").click();
    navigate(`/view?serviceType=${formData.serviceType}`);
  };

  return (
    <>
      {authData.status == "authorized" && (
        <>
          <button
            href="#choose"
            data-bs-toggle="modal"
            data-bs-target="#chooseForm"
            className="btn gradient-btn edit-data-btn d-none d-lg-inline"
          >
            <i className={"bi-pen"}></i>
          </button>
          <div
            id="chooseForm"
            data-bs-backdrop="static"
            className={`modal fade text-dark`}
            data-bs-keyboard="false"
            aria-labelledby="chooseFormLabel"
            aria-hidden="true"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="chooseFormLabel">
                    Edit content
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form className="p-2" onSubmit={handleSubmit} method="post">
                  <div className="modal-body">
                    <div className="form-group">
                      <label
                        className="form-label text-lg"
                        htmlFor="choose-one"
                      >
                        Please choose one for editind your information!
                      </label>
                    </div>
                    {[
                      "personal",
                      "navlist",
                      "content",
                      "project",
                      "banner",
                      "contact",
                      "social",
                    ].map((value, idx) => {
                      return (
                        <label htmlFor={value}>
                          <input
                            type="radio"
                            name="serviceType"
                            id={value}
                            value={value}
                            onChange={handleChange}
                            className="card-input-element d-none"
                          />
                          <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                            My {value.toUpperCase()}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  <div className="modal-footer">
                    <button
                      id="closeModal"
                      type="button"
                      className="btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn gradient-btn">
                      <i className={"bi-pen"}></i> Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditDataModalComponent;
