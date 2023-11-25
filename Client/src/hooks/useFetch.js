import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useFetch = (url) => {
  const { user } = useAuthContext();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (res.status === 200) {
            setLoading(false);
            
            const {message, project} = res.data
            
            setData(project)
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.error);

        console.error("Fetch failed:", error.response.data.error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};
