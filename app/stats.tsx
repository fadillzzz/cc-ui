import { useEffect, useState } from "react";

export default function Stats() {
  const [userNum, setUserNum] = useState(0);

  useEffect(() => {
    const getUserNum = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_API + "/stats",
        {
          credentials: "include",
        }
      );

      const body = await response.json();

      setUserNum(body.totalUsers);
    };

    getUserNum();
  }, []);

  return (
    <>
      <h2>Users: {userNum}</h2>
    </>
  );
}
