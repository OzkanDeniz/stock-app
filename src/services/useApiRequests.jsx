import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess
} from "../features/authSlice";

//?Custom hook
const useApiRequests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth)

  const login = async (userData) => {
    // const BASE_URL = "https://14111.fullstack.clarusway.com";

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      toastSuccessNotify("Login işlemi başarılı");
      dispatch(loginSuccess(data));
      navigate("stock"); 
      console.log(data);
    } catch (error) {
      toastErrorNotify("Login işlemi başarısız");
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
        headers:{Authorization:`Token ${token}`},//?APİ LERE Authorization kısmı bu şekilde konulur /auth/logout/` den sonraki kısımı ifade eder.
      });
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login, register, logout };
};

export default useApiRequests;
//? useNavigate hookunu ya bir react component içinde çağırılabilir yada bir cosutom(özel) hooke da çağırılabilir burası bir js fonksiyonu yazdık bir component değil burada amcımız generic bir js fonsksiyonu yazmamızın amacı her yerde kullanabilmek için bu yüzden custom hook yazmalıyız (custom hook jsx return etmez ama içinde hook kullanılabilir bu yüzden ismini değiştirdik useApiRequests yaptık)