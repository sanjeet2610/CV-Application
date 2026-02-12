import { format } from "date-fns";
import "../styles/rightSection.css";

function formatDate(dateString) {
  if (!dateString) return "";
  return format(new Date(dateString), "MMM yyyy");
}

export default function RightSection({
  generalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <div className="right-section">
      <div className="extra-info">
        <h2>Preview of CV</h2>
        <button onClick={() => window.print()}>Download CV</button>
      </div>

      {generalInfo.isSubmitted && (
        <div className="right-general">
          <h2>{generalInfo.name}</h2>
          <div className="mail-phone">
            <p>
              <strong>Email :</strong>
              <a href={`mailto:${generalInfo.email}`}>{generalInfo.email}</a>
            </p>
            <p>
              <strong>Phone :</strong>
              <a href={`tel:${generalInfo.phone}`}>{generalInfo.phone}</a>
            </p>
          </div>
        </div>
      )}

      {educationInfo.isSubmitted && (
        <div className="right-edu">
          <h2>Educational Details</h2>
          <h3>{educationInfo.schoolName}</h3>
          <h4>{educationInfo.titleOfStudy}</h4>
          <p>{educationInfo.dateOfStudy}</p>
        </div>
      )}

      {experienceInfo.isSubmitted && (
        <div className="right-exp">
          <h2>Experience Info</h2>
          <h3>{experienceInfo.companyName}</h3>
          <h4>{experienceInfo.positionTitle}</h4>
          <p>{experienceInfo.responsibilities}</p>
          {experienceInfo.startDate && experienceInfo.endDate && (
            <p>
              {formatDate(experienceInfo.startDate)} –{" "}
              {formatDate(experienceInfo.endDate)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
