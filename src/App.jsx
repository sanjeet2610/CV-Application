import { useState } from "react";
import LeftSection from "./components/leftSection";

export default function App() {
  const [generalInfo, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    isSubmitted: false,
  });

  const [educationInfo, setEduInfo] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    isSubmitted: false,
  });

  const handleEducationalInfoSubmit = (e) => {
    e.preventDefault();
    setEduInfo((prev) => {
      const newObj = { ...prev };
      newObj.isSubmitted = true;
      return newObj;
    });
  };

  const handleEducationalInfoEdit = () => {
    setEduInfo((prev) => {
      const newObj = { ...prev };
      newObj.isSubmitted = false;
      return newObj;
    });
  };

  const handleEducationalInfoChange = (name, value) => {
    setEduInfo((prev) => {
      const newObj = { ...prev };
      newObj[name] = value;
      return newObj;
    });
  };

  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault();
    setInfo((prev) => {
      const newObj = { ...prev };
      newObj.isSubmitted = true;
      return newObj;
    });
  };

  const handleGeneralInfoEdit = () => {
    setInfo((prev) => {
      const newObj = { ...prev };
      newObj.isSubmitted = false;
      return newObj;
    });
  };

  const handleGeneralInfoChange = (name, value) => {
    setInfo((prev) => {
      const newObj = { ...prev };
      newObj[name] = value;
      return newObj;
    });
  };

  return (
    <>
      <LeftSection
        generalInfo={generalInfo}
        handleGeneralInfoSubmit={handleGeneralInfoSubmit}
        handleGeneralInfoEdit={handleGeneralInfoEdit}
        handleGeneralInfoChange={handleGeneralInfoChange}
        educationInfo={educationInfo}
        handleEducationalInfoSubmit={handleEducationalInfoSubmit}
        handleEducationalInfoEdit={handleEducationalInfoEdit}
        handleEducationalInfoChange={handleEducationalInfoChange}
      ></LeftSection>
    </>
  );
}
