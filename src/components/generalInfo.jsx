export default function GeneralInfo({
  generalInfo,
  handleGeneralInfoEdit,
  handleGeneralInfoSubmit,
  handleGeneralInfoChange,
}) {
  if (generalInfo.isSubmitted) {
    return (
      <>
        <h1>DisplayMode</h1>
        <p>Name :{generalInfo.name}</p>
        <p>Email :{generalInfo.email}</p>
        <p>Phone No:{generalInfo.phone}</p>
        <button onClick={handleGeneralInfoEdit}>Edit</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Form Mode</h1>
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
      </>
    );
  }
}
