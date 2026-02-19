const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3";

export const fetchSportsleagues = async () => {
  try {
    const res = await fetch(`${BASE_URL}/all_leagues.php`);

    if (res.status !== 200) {
      return {
        data: [],
        error: true,
      }
    }

    const data = await res.json();

    return {
      data: data?.leagues || null,
      error: false
    };
  } catch (error) {
    console.log("Error in Sports leagues call", error);
    return {
      data: [],
      error: true,
    }
  }
}


export const fetchSportLeagueBadge = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/search_all_seasons.php?badge=1&id=${id}`);

    if (res.status !== 200) {
      return {
        data: [],
        error: true,
      }
    }

    const data = await res.json();
    return {
      data: data?.seasons[0].strBadge,
      error: false,
    }
  } catch (error) {
    console.log("Error fetching league badge", error);
    return {
      data: [],
      error: true
    }
  }
}