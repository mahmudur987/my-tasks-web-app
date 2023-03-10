import { Navbar } from "flowbite-react";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import { NavbarCollapse } from "flowbite-react/lib/esm/components/Navbar/NavbarCollapse";
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Switcher from "../DarkSide/Switcher";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { userContext } from "../../App";

const auth = getAuth(app);

const MyNavbar = () => {
  const { user } = useContext(userContext);

  const handleSignOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className=" dark:bg-slate-900 dark:text-white">
      <Navbar fluid={true} rounded={true}>
        <NavbarBrand>
          <img
            src="https://www.pngkit.com/png/detail/770-7704437_daily-routine-clipart-businessman-daily-routine-concept-imagens.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            D-Routin
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <Link to={"/"}>ADD TASK</Link>
          <Link to={"/mytask"}>MY TASKS</Link>
          <Link to={"/completetask"}>COMPLETED TASKS</Link>
          <Link to={"/counter"}>COUNTER</Link>

          {user ? (
            <Link>
              <button onClick={handleSignOut}>SIGNOUT</button>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>LOGIN</Link>
              <Link to={"/signup"}>SIGNUP</Link>
            </>
          )}

          <Link>
            <Switcher></Switcher>
          </Link>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
