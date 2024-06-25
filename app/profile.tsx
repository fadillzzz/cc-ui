import { useEffect, useState } from "react";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_API + "/profile",
        {
          credentials: "include",
        }
      );

      const body = await response.json();

      setEmail(body.email);
      setName(body.name);
    };

    fetchProfile();
  }, []);

  const updateName = async (e: any) => {
    e.preventDefault();

    const newName = e.target[0].value;

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_API + "/profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ name: newName }),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setName(newName);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h2>Email: {email}</h2>
      <h2>Name: {name}</h2>
      <form onSubmit={updateName}>
        <input type="text" placeholder="New name" />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
