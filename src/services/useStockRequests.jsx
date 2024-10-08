import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  // getFirmsSuccess,
  // getSalesSuccess,
  getStockSuccess,
} from "../features/stockSlice";

const useStockRequests = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/firms`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     dispatch(getFirmsSuccess(data.data));
  //     console.log(data);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };
  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/sales`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     dispatch(getSalesSuccess(data.data));
  //     console.log(data);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  // const getStock = async (path) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(`${process.env.REACT_APP_BASE_URL}{path}`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     // const stockData = data.data
  //     dispatch(getStockSuccess({data:data.data,path}));
  //     console.log(data);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };




  
  // return { getFirms, getSales, getStock };
  return { getStock };
};

export default useStockRequests;
