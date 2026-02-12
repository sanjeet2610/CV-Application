import GeneralInfo from "./generalInfo";
import Education from "./education";
import Experience from "./experience";
import "../styles/leftSection.css";
export default function LeftSection(props) {
  console.log(props);
  return (
    <div className="left-section">
      <GeneralInfo
        generalInfo={props.generalInfo}
        handleGeneralInfoSubmit={props.handleGeneralInfoSubmit}
        handleGeneralInfoEdit={props.handleGeneralInfoEdit}
        handleGeneralInfoChange={props.handleGeneralInfoChange}
      ></GeneralInfo>
      <Education
        educationInfo={props.educationInfo}
        handleEducationalInfoChange={props.handleEducationalInfoChange}
        handleEducationalInfoSubmit={props.handleEducationalInfoSubmit}
        handleEducationalInfoEdit={props.handleEducationalInfoEdit}
      ></Education>
      <Experience
        experienceInfo={props.experienceInfo}
        handleExperienceInfoChange={props.handleExperienceInfoChange}
        handleExperienceInfoEdit={props.handleExperienceInfoEdit}
        handleExperienceInfoSubmit={props.handleExperienceInfoSubmit}
      ></Experience>
    </div>
  );
}
