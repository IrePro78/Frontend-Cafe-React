import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const {setAuth} = useAuth();

  const REFRESH_URL = "auth/refresh";

  const refresh = async () => {
    const response = await axios.post(REFRESH_URL, {}, {
      withCredentials: true,
    });
    // @ts-ignore
    setAuth(( prev ) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return {
        ...prev,
        role: response.data.role,
        access_token: response.data.accessToken
      }
    });
    return response.data.access_token;
  }
  return refresh;
};

export default useRefreshToken;
