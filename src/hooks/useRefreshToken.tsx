import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();

  const REFRESH_URL = "auth/refresh";

  const refresh = async () => {
    const response = await axios.post(
      REFRESH_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${auth.refresh_token}`,
        },
        withCredentials: true,
      }
    );
    // @ts-ignore
    setAuth((prev) => {
      return {
        ...prev,
        role: response.data.role,
        access_token: response.data.access_token,
      };
    });
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
