import React, { useEffect, useState } from "react";
import { fetchApi } from "../../helpers/fetchApi";

const UserApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi("", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setData)
      .catch(setError);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
};

export default UserApi;
