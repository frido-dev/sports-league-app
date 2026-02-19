import React from "react";

const SportLeagueCard = ({ league, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{league.strLeague}</h3>
      <p><strong>Sport:</strong> {league.strSport}</p>
      <p><strong>Alternate Name:</strong> {league.strLeagueAlternate || "N/A"}</p>
    </div>
  );
};

export default SportLeagueCard;
