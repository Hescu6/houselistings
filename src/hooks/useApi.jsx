import React, { useEffect, useState } from "react";
import axios from "axios";

export function useApi (paramsAPI)  {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  async function fetchData(params) {
    try {
      const result = await axios.request(params);
      setResponse(result.data)
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchData(paramsAPI);
  }, []);

  return { response, error, loading }
};
