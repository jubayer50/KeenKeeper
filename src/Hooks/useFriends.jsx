import React, { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 500);
    };
    dataFetch();
  }, []);

  return { friends, setFriends, loading };
};

export default useFriends;
