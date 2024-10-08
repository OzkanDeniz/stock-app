import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/auth/login`,
    headers: { Authorization: `Token ${token}` },
  });
  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/auth/login`,
  });

  return {axiosToken,axiosPublic}
};

export default useAxios;
