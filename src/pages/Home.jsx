import React, { useState, useEffect } from "react";
import "../styles/index.css";
import Searchbar from "../components/Searchbar";
import DropdownFilter from "../components/DropdownFilter";
import SportLeagueList from "../components/SportLeagueList";
import LeagueBadgeModal from "../components/LeagueBadgeModal";
import {
  useSportsLeaguesQuery,
  useLeagueBadgeQuery,
} from "../services/query/sports-leagues.query";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("All");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [filteredLeagues, setFilteredLeagues] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeagueId, setSelectedLeagueId] = useState(null);

  const {
    data: sportLeagues = [],
    isLoading: leaguesLoading,
    isError: leagueDataError,
  } = useSportsLeaguesQuery();

  const {
    data: badgeData,
    isLoading: loadingBadge,
    isError: badgeDataError,
  } = useLeagueBadgeQuery(selectedLeagueId);

  useEffect(() => {
    const sports = sportLeagues.map((league) => league.strSport);
    const newOptions = ["All", ...new Set(sports)];
    setDropdownOptions(newOptions);
  }, [sportLeagues]);

  useEffect(() => {
    let tempList = sportLeagues;

    if (searchStr) {
      const normalizedSearch = searchStr.toLowerCase();
      tempList = tempList.filter((league) =>
        league.strLeague.toLowerCase().includes(normalizedSearch)
      );
    }

    if (selectedLeague !== "All") {
      tempList = tempList.filter(
        (league) => league.strSport === selectedLeague
      );
    }

    setFilteredLeagues(tempList);
  }, [sportLeagues, searchStr, selectedLeague]);

  const handleLeagueClick = (id) => {
    setSelectedLeagueId(id);
    setIsModalOpen(true);
  };

  const onCloseBadgeModal = () => {
    setIsModalOpen(false);
    setSelectedLeagueId(null);
  };

  return (
    <div className="container">
      <h1>Sports Leagues</h1>

      <div className="filters">
        <Searchbar value={searchStr} onChange={setSearchStr} />
        <DropdownFilter
          options={dropdownOptions}
          value={selectedLeague}
          onChange={setSelectedLeague}
        />
      </div>

      <SportLeagueList
        leagues={filteredLeagues}
        loading={leaguesLoading}
        error={leagueDataError}
        onLeagueClick={handleLeagueClick}
      />

      <LeagueBadgeModal
        isOpen={isModalOpen}
        badge={badgeData}
        loading={loadingBadge}
        error={badgeDataError}
        onClose={onCloseBadgeModal}
      />
    </div>
  );
};

export default Home;
