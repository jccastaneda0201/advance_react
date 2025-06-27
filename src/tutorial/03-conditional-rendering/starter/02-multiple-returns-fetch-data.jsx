import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
};
export default MultipleReturnsFetchData;
