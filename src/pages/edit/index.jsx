import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

// Json Editor
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

// Mock client
import { client } from "../../api/mockClient";

// Utils function
import showSnackBar from "../../utilities/show-snackbar";

// Common component
import SeparateHeader from "../../components/shared/others/SeparateHeader";

// Redux actions
import { updateData as updatePersonal } from "../../redux/features/meSlice";
import { updateData as updateNavlist } from "../../redux/features/navlistSlice";
import { updateData as updateContent } from "../../redux/features/contentSlice";
import { updateData as updateProject } from "../../redux/features/projectSlice";
import { updateData as updateContact } from "../../redux/features/contactSlice";
import { updateData as updateBanner } from "../../redux/features/bannerSlice";
import { updateData as updateSocial } from "../../redux/features/socialSlice";

function ViewPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [data, setData] = React.useState(null);
  const jsonInputRef = React.useRef(data);

  const serviceType = searchParams.get("serviceType") || "personal";

  const switchAction = (section) => {
    let updateAction = updatePersonal;

    switch (section) {
      case "personal":
        updateAction = updatePersonal;
        break;
      case "navlist":
        updateAction = updateNavlist;
        break;
      case "content":
        updateAction = updateContent;
        break;
      case "project":
        updateAction = updateProject;
        break;
      case "banner":
        updateAction = updateBanner;
        break;
      case "contact":
        updateAction = updateContact;
        break;
      case "social":
        updateAction = updateSocial;
        break;
      default:
        break;
    }
    return updateAction;
  };

  const handleUpdateJson = () => {
    if (jsonInputRef.current.state.jsObject) {
      dispatch(switchAction(serviceType)(jsonInputRef.current.state.jsObject));
      showSnackBar("See the changes that you update information!", "success");
    } else {
      showSnackBar("No edited data, please edit your content!", "warning");
    }
  };

  const handleSubmitJson = () => {
    if (jsonInputRef.current.state.jsObject) {
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(jsonInputRef.current.state.jsObject)
      )}`;

      const link = document.createElement("a");
      link.download = `${Date.now()}.json`;
      link.href = jsonString;

      // Trigger download
      link.click();
    } else {
      showSnackBar("No edited data, please edit your content!", "warning");
    }
  };

  React.useEffect(() => {
    if (data === null) {
      client
        .get(`/mockApi/${serviceType}`)
        .then((response) => {
          setData({
            status: 200,
            result: response.data,
          });
        })
        .catch((error) => {
          console.log("Load Error ", error);
          showSnackBar("Something went wrong!", "warning");
        });
    }
  }, [data]);

  return (
    <div className="container">
      <SeparateHeader headerName={"Edit your information"} />
      <JSONInput
        id="a_unique_id"
        ref={jsonInputRef}
        placeholder={data}
        locale={locale}
        height="440px"
        width="100%"
      />
      <div className="d-flex justify-content-end my-3">
        <button
          className="btn btn-light"
          onClick={() => {
            navigate("/");
            // window.location.reload()
          }}
        >
          <i className={"bi-arrow-clockwise"}></i> Return
        </button>
        <button
          className="btn btn-dark mx-2"
          onClick={() => handleUpdateJson()}
        >
          <i className={"bi-save"}></i> Update
        </button>
        <button className="btn btn-dark" onClick={() => handleSubmitJson()}>
          <i className={"bi-arrow-down"}></i> Download
        </button>
      </div>
    </div>
  );
}

export default ViewPage;
