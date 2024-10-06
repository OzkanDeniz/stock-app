import axios from "axios";
import { useSelector } from "react-redux";

const useStockRequests = () => {
  const { token } = useSelector((state) => state.auth);

  const getFirms = async () => {
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/firms`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSales = async () => {
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/sales`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getFirms, getSales };
};
 
export default useStockRequests;
