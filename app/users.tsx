import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_API + "/users",
        {
          credentials: "include",
        }
      );

      const body = await response.json();

      setUsers(body);
    };

    getUsers();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Signup time</th>
            <th>Login count</th>
            <th>Last session</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, i: number) => (
            <tr key={i}>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.loginCount}</td>
              <td>{user.lastSession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
