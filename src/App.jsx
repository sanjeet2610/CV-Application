import { useState } from "react";
import LeftSection from "./components/leftSection";
import RightSection from "./components/rightSection";
import "./styles/app.css";

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

  const [experienceInfo, setExp] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
    isSubmitted: false,
  });

  const handleExperienceInfoSubmit = (e) => {
    e.preventDefault();
    setExp((prev) => {
      const newObj = { ...prev };
      newObj.isSubmitted = true;
      return newObj;
    });
  };

  const handleExperienceInfoEdit = () => {
    setExp((prev) => {
      const newObj = { ...prev };
      newObj.isSubmitted = false;
      return newObj;
    });
  };

  const handleExperienceInfoChange = (name, value) => {
    setExp((prev) => {
      const newObj = { ...prev };
      newObj[name] = value;
      return newObj;
    });
  };

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
    <div className="app">
      <LeftSection
        generalInfo={generalInfo}
        handleGeneralInfoSubmit={handleGeneralInfoSubmit}
        handleGeneralInfoEdit={handleGeneralInfoEdit}
        handleGeneralInfoChange={handleGeneralInfoChange}
        educationInfo={educationInfo}
        handleEducationalInfoSubmit={handleEducationalInfoSubmit}
        handleEducationalInfoEdit={handleEducationalInfoEdit}
        handleEducationalInfoChange={handleEducationalInfoChange}
        experienceInfo={experienceInfo}
        handleExperienceInfoChange={handleExperienceInfoChange}
        handleExperienceInfoEdit={handleExperienceInfoEdit}
        handleExperienceInfoSubmit={handleExperienceInfoSubmit}
      ></LeftSection>
      <RightSection
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      ></RightSection>
    </div>
  );
}
