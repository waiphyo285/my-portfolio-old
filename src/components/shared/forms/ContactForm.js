import React from "react";
import { Formik } from "formik";
import { validationSchema } from "../../../validations/contact.schema";

// utils function
import showSnackBar from "../../../utilities/show-snackbar";

function ContactFormComponent() {
  const submitForm = (formData) => {
    const { name, email, message } = formData;

    Email.send({
      SecureToken: "0BD9F554-7602-4D27-8D77-26145502C19D",
      To: "waiphyoenaing.joy007@gmail.com",
      From: "waiphyo.dev@gmail.com",
      Subject: `${name} <${email}>`,
      Body: `${message}`,
    }).then((message) => {
      if (message === "OK") {
        showSnackBar(
          "I've received your message, I'll get back soon!",
          "success"
        );
      } else {
        showSnackBar(
          "Oops! your message can't send, please try again!",
          "warning"
        );
      }
    });
  };

  return (
    <div className="shadow-sm">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values) => submitForm(values)}
        validateOnChange
        validateOnMount
      >
        {({ values, errors, isValid, handleChange, handleSubmit }) => {
          return (
            <form className="p-2" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="nameInput"
                      value={values.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="John Doe"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="emailInput"
                      value={values.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="john@doe.io"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group m-2">
                <label htmlFor="message">Message *</label>
                <textarea
                  value={values.message}
                  onChange={handleChange}
                  placeholder={"Lorem ipsum is ..."}
                  className="form-control"
                  id="messageInput"
                  name="message"
                  rows="2"
                ></textarea>

                {!isValid ? (
                  <small className="text-danger">
                    🚫 {errors.name || errors.email || errors.message}
                  </small>
                ) : (
                  <small className="text-success">✅ Ready to submit!</small>
                )}
              </div>

              <div className="form-group d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn submit-btn mx-2 my-3"
                  disabled={!isValid}
                >
                  <i className="bi-send" /> Submit
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactFormComponent;
