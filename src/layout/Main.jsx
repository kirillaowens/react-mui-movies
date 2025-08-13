import React, { useState } from "react";
import ItemList from "../components/ItemList";
import Preloader from "../components/Preloader";
import { Typography, Box } from "@mui/material";
import Search from "../components/Search";
import Filters from "../components/Filters";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const fetchMovies = (query, type) => {
    if (!query.trim()) {
      setMovies([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const typeParam = type && type !== 'all' ? `&type=${type}` : '';

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${typeParam}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
    fetchMovies(newSearch, filter);
  };

  const handleChange = (newFilter) => {
    setFilter(newFilter);
    fetchMovies(search, newFilter);
  };

  if (loading) return <Preloader />;

  return (
    <Box>
      <Search onSearch={handleSearch} />
      <Filters filter={filter} onFilterChange={handleChange} />
      {!movies.length ? (
        <Typography variant="h6" align="center" sx={{ mt: 5 }}>
          Let's search
        </Typography>
      ) : (
        <ItemList movies={movies} />
      )}
    </Box>
  );
}

export default Main;
