import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function Item(props) {
  const { Poster, Title, Year, Type } = props
  return(
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={Poster}
        title={Title}
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

export default Item
