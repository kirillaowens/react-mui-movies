import { Grid } from "@mui/material";
import Item from "../components/Item";

function ItemList(props) {
  const { movies } = props;

  return (
    <Grid container spacing={2} sx={{ flex: 1, p: 5 }}>
      {movies.map((movie) => (
        <Grid size={{ xs: 7, sm: 5, md: 3 }} key={movie.imdbID}>
          <Item 
            Title={movie.Title}
            Poster={movie.Poster}
            Type={movie.Type}
            Year={movie.Year}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemList;