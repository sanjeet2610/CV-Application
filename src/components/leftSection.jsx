import GeneralInfo from "./generalInfo";

export default function LeftSection(props) {
  return (
    <>
      <GeneralInfo
        generalInfo={props.generalInfo}
        handleGeneralInfoSubmit={props.handleGeneralInfoSubmit}
        handleGeneralInfoEdit={props.handleGeneralInfoEdit}
        handleGeneralInfoChange={props.handleGeneralInfoChange}
      ></GeneralInfo>
    </>
  );
}
