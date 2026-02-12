export default function Education({
  educationInfo,
  handleEducationalInfoSubmit,
  handleEducationalInfoEdit,
  handleEducationalInfoChange,
}) {
  if (educationInfo.isSubmitted) {
    return (
      <div>
        <h2>Education-info submitted ...</h2>
        <p>
          <strong>School Name :</strong>
          {educationInfo.schoolName}
        </p>
        <p>
          <strong>Title Of Study :</strong>
          {educationInfo.titleOfStudy}
        </p>
        <p>
          <strong>Date Of Study :</strong>
          {educationInfo.dateOfStudy}
        </p>
        <button onClick={handleEducationalInfoEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Fill education-info form</h2>
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
      </div>
    );
  }
}
