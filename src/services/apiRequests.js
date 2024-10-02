import axios from "axios";

export const login = async (userData) => {
    const BASE_URL ="https://14111.fullstack.clarusway.com"
  const data = await axios.post(`${BASE_URL}/auth/login`, userData);
};
//? login({"cw.com","userData" parametresiyle gelen içeriği yani email ve passwordü }) //fonsiyonu başka yerde çağırırken veriyi obje olarak alıcaz ve post isteği göndericez!
