import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
export const login = async (userData) => {
  const BASE_URL = "https://14111.fullstack.clarusway.com";
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, userData);
    toastSuccessNotify("Login işlemi başarılı");
    console.log(data);
  } catch (error) {
    toastErrorNotify("Login işlemi başarısız");
    console.log(error);
  }
};
//? login({"cw.com","userData" parametresiyle gelen içeriği yani email ve passwordü }) //fonsiyonu başka yerde çağırırken veriyi obje olarak alıcaz ve post isteği göndericez!
