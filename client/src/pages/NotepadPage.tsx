import NotepadComponent from "../components/NotepadComponent";
import WhiteContainer from "../components/WhiteContainer";
import SideBar from "../components/SideBar";
import Avatar from "../components/Avatar";
import "react-quill/dist/quill.snow.css";


const NotepadPage = () => {
  return (
    <>
      <WhiteContainer>
        <NotepadComponent/>
        <Avatar />
      </WhiteContainer>
      <SideBar />
    </>
  );
};

export default NotepadPage;
