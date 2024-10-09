import { useEffect } from "react";
import useStockRequests from "../services/useStockRequests";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";

// import { useSelector } from "react-redux";
// import axios from "axios";

// const getFirms = async () => {
//   try {
//     const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/firms`, {
//       headers: { Authorization: `Token ${token}` },
//     });
//     console.log(data)
//   } catch (error) {
//     console.log(error);
//   }
// };

const Firms = () => {
  // const { token } = useSelector((state) => state.auth);
  // const { getFirms, getSales,getStock } = useStockRequests();

  const { getStock } = useStockRequests();
  const { firms } = useSelector((state) => state.stock);
  

  //?Sayfa yüklendikten sonra firmaları getir.
  useEffect(() => {
    // getFirms();
    // getSales();
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h5" color={"error"} mb={2}>
        Firms
      </Typography>
      <Button variant="contained" sx={{mb:2}}>NEW FİRM</Button>

      <Grid container justifyContent={"center"} gap={2}>
        {firms && firms.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
