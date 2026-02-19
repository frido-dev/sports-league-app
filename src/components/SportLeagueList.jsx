import React from "react";
import SportLeagueCard from "./SportLeagueCard";

const SportLeagueList = ({ leagues, onLeagueClick, error }) => {
  if (!leagues.length && !error) return <p>No leagues found.</p>;

  return (
    <div className="grid">
      {error ? (
        <div className="error-banner">
          Uh oh! Something went wrong file fetching Sports leagues data!
        </div>
      ) : leagues.map((league) => (
        <SportLeagueCard
          key={league.idLeague}
          league={league}
          onClick={() => onLeagueClick(league.idLeague)}
        />
      ))}
    </div>
  );
};

export default SportLeagueList;
