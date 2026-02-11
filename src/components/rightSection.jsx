export default function RightSection({
  generalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <>
      {generalInfo.isSubmitted && (
        <div>
          <h2>{generalInfo.name}</h2>
          <a href={`mailto:${generalInfo.email}`}>{generalInfo.email}</a>
          <a href={`tel:${generalInfo.phone}`}>{generalInfo.phone}</a>
        </div>
      )}
    </>
  );
}
