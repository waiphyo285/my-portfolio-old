import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { fetchMe } from "../../redux/features/meSlice";

// Component
import MyProfile from "../shared/header/Profile";
import getGreetingMsg from "../../utilities/greeting-msg";

function HeaderComponent() {
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.personal);

  const [greetingText, setGreetingText] = React.useState(
    getGreetingMsg(new Date().getHours())
  );

  React.useEffect(() => {
    if (new Date().getMinutes() === 0) {
      const interval = setInterval(() => {
        setGreetingText(getGreetingMsg(new Date().getHours()));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  React.useEffect(() => {
    if (personalData.status === "pending") {
      dispatch(fetchMe());
    }
  }, [personalData, dispatch]);

  return (
    <div
      className="row cover"

      // style={{
      //   backgroundImage: `url('...')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
    >
      {personalData.status === "success" ? (
        <>
          <MyProfile
            greeting={greetingText}
            fullname={personalData.data["fullname"]}
            profile_img={personalData.data["profile-img"]}
            summary={personalData.data["greeting-text"]}
          />
        </>
      ) : (
        <div className="text-center text-light">
          <div className="spinner-grow" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderComponent;
