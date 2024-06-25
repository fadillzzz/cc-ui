"use client";

import { useState, useEffect } from "react";
import Profile from "./profile";
import Users from "./users";
import Stats from "./stats";

export default function Home() {
  const [queryParams, setQueryParams] = useState(new URLSearchParams());

  let loggedIn = false;

  if (queryParams.get("loggedIn") === "true") {
    loggedIn = true;
  }

  useEffect(() => {
    setQueryParams(new URLSearchParams(window.location.search));
  }, []);

  return (
    <main>
      <a
        href={
          process.env.NEXT_PUBLIC_BASE_API +
          "/" +
          (loggedIn ? "logout" : "login")
        }
      >
        {loggedIn ? "Logout" : "Login"}
      </a>
      {loggedIn && (
        <>
          <br />
          <br />
          <Profile />
          <br />
          <Stats />
          <br />
          <Users />
        </>
      )}
    </main>
  );
}
