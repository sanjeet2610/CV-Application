export default function Experience({
  experienceInfo,
  handleExperienceInfoSubmit,
  handleExperienceInfoEdit,
  handleExperienceInfoChange,
}) {
  if (experienceInfo.isSubmitted) {
    return (
      <div>
        <h2>Experience form submitted ...</h2>
        <p>
          <strong>Company Name : </strong>
          {experienceInfo.companyName}
        </p>
        <p>
          <strong>Position :</strong>
          {experienceInfo.positionTitle}
        </p>
        <p>
          <strong>Responsibilities :</strong>
          {experienceInfo.responsibilities}
        </p>
        <p>
          <strong>Start Date :</strong>
          {experienceInfo.startDate}
        </p>
        <p>
          <strong>End Date :</strong>
          {experienceInfo.endDate}
        </p>
        <button onClick={handleExperienceInfoEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Fill experience details</h2>
        <form onSubmit={handleExperienceInfoSubmit}>
          <label htmlFor="company">Company Name :</label>
          <input
            type="text"
            name="companyName"
            value={experienceInfo.companyName}
            id="company"
            onChange={(e) =>
              handleExperienceInfoChange(e.target.name, e.target.value)
            }
          />

          <label htmlFor="position">Position :</label>
          <input
            type="text"
            id="position"
            name="positionTitle"
            value={experienceInfo.positionTitle}
            onChange={(e) =>
              handleExperienceInfoChange(e.target.name, e.target.value)
            }
          />

          <label htmlFor="responsibilities">Responsibilities :</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={experienceInfo.responsibilities}
            onChange={(e) =>
              handleExperienceInfoChange(e.target.name, e.target.value)
            }
          ></textarea>

          <label htmlFor="startDate">Start Date :</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={experienceInfo.startDate}
            onChange={(e) =>
              handleExperienceInfoChange(e.target.name, e.target.value)
            }
          />

          <label htmlFor="endDate">End Date :</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={experienceInfo.endDate}
            onChange={(e) =>
              handleExperienceInfoChange(e.target.name, e.target.value)
            }
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
