import React from "react";
import ItemList from "../components/ItemList";
import Preloader from "../components/Preloader";
import { Typography, Box } from "@mui/material";
import Search from "../components/Search";
import Filters from "../components/Filters";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      searchQuery: '',
      filter: 'all'
    };
  }

  componentDidMount() {
    this.fetchMovies(this.state.searchQuery);
  }

  fetchMovies = (query, type) => {
    if (!query.trim()) {
      this.setState({ movies: [], loading: false });
      return;
  }

  this.setState({ loading: true });

  const typeParam = type && type !== 'all' ? `&type=${type}` : '';

  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${typeParam}`)
    .then((response) => response.json())
    .then((data) =>
      this.setState({
        movies: data.Search || [],
        loading: false
      })
    )
    .catch(() => this.setState({ loading: false }));
  };

  handleSearch = (search) => {
    this.setState({ searchQuery: search }, () => {
      if (search.trim()) {
        this.fetchMovies(this.state.searchQuery, this.state.filter);
      }
    });
  };

  handleChange = (filter) => {
    this.setState({ filter }, () => {
      if (this.state.searchQuery.trim()) {
        this.fetchMovies(this.state.searchQuery, this.state.filter);
      }
    });
  };

  render() {
    const { movies, loading, filter } = this.state;

    if (loading) {
      return <Preloader />;
    }
    if (!movies.length) {
      return (
        <Box>
          <Search onSearch={this.handleSearch} />
          <Filters filter={filter} onFilterChange={this.handleChange} />
          <Typography variant="h6" align="center" sx={{ mt: 5 }}>
            Let's search
          </Typography>
        </Box>
      );
    }

    return (
      <Box>
        <Search onSearch={this.handleSearch} />
      <Filters filter={this.state.filter} onFilterChange={this.handleChange} />
        <ItemList movies={movies} />
      </Box>
    );
  }
}

export default Main;
