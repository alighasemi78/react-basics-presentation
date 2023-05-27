import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    {
      title: "greeting",
      link: "/greeting",
    },
    {
      title: "event example",
      link: "/event",
    },
    {
      title: "calculator",
      link: "/calculator",
    },
  ];

  return (
    <ul>
      {links.map((value) => {
        return (
          <li>
            <Link to={value.link} key={value.title}>
              {value.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
