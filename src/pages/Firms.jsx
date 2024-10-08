import { useEffect } from "react";
import useStockRequests from "../services/useStockRequests";
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
    getStock("sales")
  }, []);

  return <div>Firms</div>;
};

export default Firms;
