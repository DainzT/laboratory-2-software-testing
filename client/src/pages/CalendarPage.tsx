import Avatar from "../components/AvatarModal";
import SideBar from "../components/SideBar";
import WhiteContainer from "../components/WhiteContainer";

import CalendarComponent from "../components/CalendarComponent";

const CalendarPage = () => {
  return (
    <>
      <WhiteContainer>
        <CalendarComponent />
        <Avatar />
      </WhiteContainer>
      <SideBar />
    </>
  );
};

export default CalendarPage;
