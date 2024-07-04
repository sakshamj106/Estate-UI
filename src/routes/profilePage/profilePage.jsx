import List from '../../components/list/list'
import './profilePage.scss'
import Chat from "../../components/chat/chat"
import apiRequest from '../../lib/apiRequest'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function ProfilePage(){

  const {currentUser,updateUser} = useContext(AuthContext);

  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
       await apiRequest.post("/auth/logout");
       updateUser(null);
       navigate("/");
    } catch (err) {
      console.log(err)
    }
  }
  // if (!currentUser) {
  //   return <div>Loading...</div>; // or redirect to login, or show a message
  // }

  return (
    <div className='profilePage'>
        <div className="details">
         <div className="wrapper">
         <div className="title">
            <h1>User Information</h1>
            <Link to={"/profile/update"}>
            <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar || "/nop.png"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>LogOut</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to={"/add"}>
            <button>Create New Post</button>
            </Link>
          </div>
          <List /> 
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
         </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
             <Chat/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage