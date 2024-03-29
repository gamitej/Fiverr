import "./Navbar.scss";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// services
import { LogoutApi } from "@/services/ApiServices/auth/auth.service";
// types
import { LoginResponse } from "@/type/pages/pages.type";
// data
import {
  handleGetSessionData,
  handleSetSessionData,
} from "@/data/session.data";
import { NavbarLinkDataType, navbarMenuLinkData } from "@/data/navbar.data";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  // ================= HOOKS =================
  useEffect(() => {
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = handleGetSessionData<LoginResponse>("USER");

  const handleLogout = async () => {
    await LogoutApi();
    navigate("/");
    handleSetSessionData<null>("USER", null);
  };

  /**
   * TSX
   */
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/gigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="messages">
                    Messages
                  </Link>
                  <Link className="link" to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            {navbarMenuLinkData.map((item: NavbarLinkDataType) => (
              <Link className={item.className} to={item.to} key={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
