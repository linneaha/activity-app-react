export const Activity = ({ activities }) => {
  return (
    <div>
      <h2>
        <span>Activity</span>
      </h2>
      <p>{activities.activity}</p>
      <h2>
        <span>Type</span>
      </h2>
      <p>{activities.type}</p>
      <h2>
        <span>Participants</span>
      </h2>
      <p>{activities.participants}</p>
    </div>
  );
};
