import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { object } from "yup";
import { butonStyle } from "../style/globalStyle";
import useStockRequests from "../services/useStockRequests";

export default function FirmCard({ firm }) {
  const { deleteStock } = useStockRequests();

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        height: 400,
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {firm.address}
        </Typography>
        <CardMedia
          component="img"
          alt={"green iguana"}
          height="140"
          image={firm.image}
          sx={{ objectFit: "contain" }}
        />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {firm.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteOutlineIcon
          sx={butonStyle}
          onClick={() => deleteStock("firms", firm._id)}
        />
        <EditIcon sx={butonStyle} />
      </CardActions>
    </Card>
  );
}
