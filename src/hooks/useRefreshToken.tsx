import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();

  const REFRESH_URL = "auth/refresh";

  const refresh = async (): Promise<string> => {
    const response = await axios.get(REFRESH_URL, {
      withCredentials: true,
    });

    setAuth({ ...auth, access_token: response.data.access_token });
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
