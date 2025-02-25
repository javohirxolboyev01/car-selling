import { useEffect, useState } from "react";
import { fetch_data } from "../data";

export const useGetData = (route) => {
  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch_data.fetch(route, "GET");
      setData(res);
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    data,
  };
};
