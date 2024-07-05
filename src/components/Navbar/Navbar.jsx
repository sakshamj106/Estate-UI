import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);
  const user = true;
  const fetch = useNotificationStore(state => state.fetch);
  const number = useNotificationStore(state => state.number);

  if(currentUser){
    fetch();
  }

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>NestQuest</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
      {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/nop.png"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">{number}</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src="/menu.png" alt="" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
