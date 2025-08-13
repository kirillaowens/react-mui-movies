import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function Item({ Poster, Title, Year, Type }) {
  const posterUrl = Poster !== "N/A" ? Poster : "/placeholder.jpg";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 345,
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={posterUrl}
        alt={Title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <CardContent sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 0
        }}>
          <Typography variant="body2" color="text.secondary">
            {Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Type}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  )
}

export default Item;