export default function GeneralInfo({
  generalInfo,
  handleGeneralInfoEdit,
  handleGeneralInfoSubmit,
  handleGeneralInfoChange,
}) {
  if (generalInfo.isSubmitted) {
    return (
      <div className="general-display">
        <h2>General-info form submitted ...</h2>
        <p>
          <strong>Name :</strong>
          {generalInfo.name}
        </p>
        <p>
          <strong>Email :</strong>
          {generalInfo.email}
        </p>
        <p>
          <strong>Phone No:</strong>
          {generalInfo.phone}
        </p>
        <button onClick={handleGeneralInfoEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Fill General-info form</h2>
        <form onSubmit={handleGeneralInfoSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            required
            name="name"
            type="text"
            id="name"
            value={generalInfo.name}
            onChange={(e) =>
              handleGeneralInfoChange(e.target.name, e.target.value)
            }
          />
          <label htmlFor="email">Email :</label>
          <input
            required
            name="email"
            type="email"
            id="email"
            value={generalInfo.email}
            onChange={(e) =>
              handleGeneralInfoChange(e.target.name, e.target.value)
            }
          ></input>
          <label htmlFor="phone">Phone :</label>
          <input
            required
            name="phone"
            type="number"
            id="phone"
            value={generalInfo.phone}
            onChange={(e) =>
              handleGeneralInfoChange(e.target.name, e.target.value)
            }
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
