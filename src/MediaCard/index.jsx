import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IndexContext } from "../Context/context";
import ButtonCard from "../component/common/Button";
import {styles} from "./card.style";
import { Box } from '@mui/system';


export default function MediaCard({ url, description, price ,id}) {
  const { addToCart, showModalHandler } = useContext(IndexContext);

  return (
    <Box sx={{ paddingTop: "40px" }}>
      <Card sx={{ width: "300px" }}>
        <CardMedia
          component="img"
          height="470px"
          image={url}
          onClick={() => showModalHandler()}
        />
        <CardContent>
          <Typography
            variant="body"
            style={styles.content}
            sx={{ "&:hover": { color: "tomato" } }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions style={styles.buttons}>
          <Typography component="span">$ {price}</Typography>
          <ButtonCard onclick={() => addToCart(id)} title="add to product" />
        </CardActions>
      </Card>
    </Box>
  );
}


