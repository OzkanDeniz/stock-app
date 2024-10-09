import { useEffect } from "react";
import useStockRequests from "../services/useStockRequests";
import Typography from "@mui/material/Typography";
import  Button  from "@mui/material/Button";
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
  //?Sayfa yüklendikten sonra firmaları getir.
  useEffect(() => {
    // getFirms();
    // getSales();
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h5" color={"error"} mb={2} >Firms</Typography>
      <Button variant="contained">NEW FİRM</Button>
    </div>
  );
};

export default Firms;
