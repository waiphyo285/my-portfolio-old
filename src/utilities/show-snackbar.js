import { toast } from "react-toastify";

const default_config = {
  position: "bottom-center",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  autoClose: 3000,
  theme: "light",
};

function showSnackBar(message, type = "default", config = {}) {
  let getToastFun = toast;

  switch (type) {
    case "info":
      getToastFun = toast.info;
      break;
    case "warning":
      getToastFun = toast.warning;
      break;
    case "success":
      getToastFun = toast.success;
      break;
    case "error":
      getToastFun = toast.error;
      break;
    default:
      break;
  }

  return getToastFun(message, { ...default_config, ...config });
}

export default showSnackBar;
