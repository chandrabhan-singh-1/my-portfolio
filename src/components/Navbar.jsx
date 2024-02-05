import { NavLink } from "react-router-dom";

import { coder2 } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className={"shrink-0"}>
        <img
          src={coder2}
          alt="logo"
          height={70}
          width={70}
          title="Home"
          className="hover:scale-110 hover:border-sky-500 border-2 border-gray-300 object-cover rounded-full"
        />
      </NavLink>
      <nav className="flex text-md sm:text-lg gap-4 sm:gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-sky-400 underline underline-offset-8" : "hover:text-sky-400 hover:underline hover:underline-offset-8 text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-sky-400 underline underline-offset-8" : "hover:text-sky-400 hover:underline hover:underline-offset-8 text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-sky-400 underline underline-offset-8" : "hover:text-sky-400 hover:underline hover:underline-offset-8 text-white"
          }
        >
          Contact Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
