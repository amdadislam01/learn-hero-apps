import { useEffect, useState } from "react";
import axios from "axios";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer;
    setLoading(true);

    axios
      .get("/apps.json")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setApps(res.data);
        } else {
          setApps([]);
        }
      })
      .catch((err) => setError(err))
      .finally(() => {
        timer = setTimeout(() => setLoading(false), 1000);
      });

    return () => clearTimeout(timer);
  }, []);

  return { apps, loading, error };
};

export default useApps;
