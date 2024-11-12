import React from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { validationSchema } from "../../../validations/auth.schema";
import { authLogin, authLogout } from "../../../redux/features/authSlice";

// utils function
import showSnackBar from "../../../utilities/show-snackbar";

const AuthModalComponent = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);

  const submitForm = async (formData) => {
    dispatch(authLogin(formData))
      .unwrap()
      .then((result) => {
        if (result === null) {
          showSnackBar("Sorry, username or password went wrong!", "warning");
        } else {
          document.getElementById("closeModal").click();
          setTimeout(() => window.location.reload(), 3000);
          showSnackBar("You are successfully logged in!", "success");
        }
      })
      .catch((error) => {
        console.log("Login Error ", error);
        showSnackBar("Something went wrong!", "warning");
      });
  };

  return (
    <>
      {authData.status == "unAuthorized" ? (
        <>
          <button
            href="#login"
            data-bs-toggle="modal"
            data-bs-target="#loginForm"
            className="btn gradient-btn toggle-auth-btn d-none d-lg-inline"
          >
            <i className={"bi-box-arrow-in-right"}></i>
          </button>
          <div
            id="loginForm"
            data-bs-backdrop="static"
            className={`modal fade text-dark`}
            data-bs-keyboard="false"
            aria-labelledby="loginFormLabel"
            aria-hidden="true"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="loginFormLabel">
                    Welcome back!
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <Formik
                  validationSchema={validationSchema}
                  initialValues={{ username: "", password: "" }}
                  onSubmit={(values) => {
                    submitForm(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form className="p-2 text-xs" onSubmit={handleSubmit}>
                      <div className="px-4 font-sm">
                        * The entire page's content for this portfolio may well
                        be edited by authorized users.
                      </div>
                      <div className="modal-body">
                        <div className="form-group m-2 mb-4">
                          <label htmlFor="username">Username *</label>
                          <input
                            type="text"
                            name="username"
                            id="usernameInput"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="minmin"
                            autoFocus
                          />
                          <span className="text-danger">
                            {errors.username &&
                              touched.username &&
                              errors.username}
                          </span>
                        </div>
                        <div className="form-group m-2 mb-4">
                          <label htmlFor="password">Password *</label>
                          <input
                            type="password"
                            name="password"
                            id="passwordInput"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="******"
                          />
                          <span className="text-danger">
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </span>
                        </div>
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
                          <i className={"bi-box-arrow-in-right"}></i> Login
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button
          href="#logout"
          onClick={() => {
            dispatch(authLogout());
            setTimeout(() => window.location.reload(), 3000);
            showSnackBar("You are successfully logged out!", "success");
          }}
          className="btn gradient-btn toggle-auth-btn d-none d-lg-inline"
        >
          <i className={"bi-box-arrow-right"}></i>
        </button>
      )}
    </>
  );
};

export default AuthModalComponent;
