export default function Education({
  educationInfo,
  handleEducationalInfoSubmit,
  handleEducationalInfoEdit,
  handleEducationalInfoChange,
}) {
  if (educationInfo.isSubmitted) {
    return (
      <>
        <h1>Display Mode</h1>
        <p>School Name :{educationInfo.schoolName}</p>
        <p>Title Of Study :{educationInfo.titleOfStudy}</p>
        <p>Date Of Study :{educationInfo.dateOfStudy}</p>
        <button onClick={handleEducationalInfoEdit}>Edit</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Form Mode</h1>
        <form onSubmit={handleEducationalInfoSubmit}>
          <label htmlFor="schoolName">School Name :</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={educationInfo.schoolName}
            onChange={(e) =>
              handleEducationalInfoChange(e.target.name, e.target.value)
            }
          />
          <label htmlFor="title">Title Of Study</label>
          <input
            type="text"
            id="title"
            name="titleOfStudy"
            value={educationInfo.titleOfStudy}
            onChange={(e) =>
              handleEducationalInfoChange(e.target.name, e.target.value)
            }
          />
          <label htmlFor="date">Date Of Study :</label>
          <input
            type="date"
            id="date"
            name="dateOfStudy"
            value={educationInfo.dateOfStudy}
            onChange={(e) =>
              handleEducationalInfoChange(e.target.name, e.target.value)
            }
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
