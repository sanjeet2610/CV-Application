export default function Experience({
  experienceInfo,
  handleExperienceInfoSubmit,
  handleExperienceInfoEdit,
  handleExperienceInfoChange,
}) {
  if (experienceInfo.isSubmitted) {
    return (
      <>
        <h1>Display Mode</h1>
        <p>Company Name : {experienceInfo.companyName}</p>
        <p>Position :{experienceInfo.positionTitle}</p>
        <p>Responsibilities :{experienceInfo.responsibilities}</p>
        <p>Start Date :{experienceInfo.startDate}</p>
        <p>End Date :{experienceInfo.endDate}</p>
        <button onClick={handleExperienceInfoEdit}>Edit</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Form Mode</h1>
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
      </>
    );
  }
}
