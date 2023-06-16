import { useEffect, useState } from "react";

const useFetch = (initialUrl) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };

  return { isLoading, isError, fetchedData, updateUrl };
};

export default useFetch;
