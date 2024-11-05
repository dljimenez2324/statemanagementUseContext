import { Link } from "react-router-dom";

const LIstPage = () => {
  const users = [
    { id: 1, name: "Jose" },
    { id: 2, name: "Jacob" },
    { id: 3, name: "Ken" },
  ];

  return (
    <>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            {/* <a href="#">{user.name}</a> */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LIstPage;
