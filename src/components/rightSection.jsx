import { format } from "date-fns";

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
    <>
      {generalInfo.isSubmitted && (
        <div>
          <h2>Personal Info</h2>
          <h3>{generalInfo.name}</h3>
          <p>
            <a href={`mailto:${generalInfo.email}`}>{generalInfo.email}</a>
          </p>
          <p>
            <a href={`tel:${generalInfo.phone}`}>{generalInfo.phone}</a>
          </p>
        </div>
      )}

      {educationInfo.isSubmitted && (
        <div>
          <h2>Educational Details</h2>
          <h3>{educationInfo.schoolName}</h3>
          <h4>{educationInfo.titleOfStudy}</h4>
          <p>{educationInfo.dateOfStudy}</p>
        </div>
      )}

      {experienceInfo.isSubmitted && (
        <div>
          <h2>Experience Info</h2>
          <h3>{experienceInfo.companyName}</h3>
          <h4>{experienceInfo.positionTitle}</h4>
          <p>{experienceInfo.responsibilities}</p>
          <p>
            {formatDate(experienceInfo.startDate)} –{" "}
            {formatDate(experienceInfo.endDate)}
          </p>
        </div>
      )}
    </>
  );
}
