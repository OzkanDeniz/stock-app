import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";



const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const getFirm = async () => {
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/firms`, {
        headers: { Authorization: `Token ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //?Sayfa yüklendikten sonra firmaları getir.
  useEffect(() => {
    getFirm();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
