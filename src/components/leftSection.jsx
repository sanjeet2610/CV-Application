import GeneralInfo from "./generalInfo";
import Education from "./education";
export default function LeftSection(props) {
  return (
    <>
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
    </>
  );
}
