import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

//?Custom hook
const useApiRequests = () => {
  const navigate = useNavigate();
  
  const login = async (userData) => {
    
    const BASE_URL = "https://14111.fullstack.clarusway.com";
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, userData);
      toastSuccessNotify("Login işlemi başarılı");
      navigate("stock"); //? useNavigate hookunu ya bir react component içinde çağırılabilir yada bir cosutom(özel) hooke da çağırılabilir burası bir js fonksiyonu yazdık bir component değil burada amcımız generic bir js fonsksiyonu yazmamızın amacı her yerde kullanabilmek için bu yüzden custom hook yazmalıyız (custom hook jsx return etmez ama içinde hook kullanılabilir bu yüzden ismini değiştirdik useApiRequests yaptık)
      console.log(data);
    } catch (error) {
      toastErrorNotify("Login işlemi başarısız");
      console.log(error);
    }
  };

  const register = async (userData) => {}
  
    return{login,register}
};

export default useApiRequests;
