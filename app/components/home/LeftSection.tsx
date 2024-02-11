import Image from "next/image";
import ourlimeImage from '@/public/images/ourlime logo.png'
import userPicture from '@/public/images/userPicture.png'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import RefreshIcon from '@mui/icons-material/Refresh';
export default function LeftSection() {
  return (
    <section className="left-section">

        <div className="profile-stats">

          <div className="image-wrapper">
            <Image src = {ourlimeImage} alt = "profile picture"
            />
          </div>

          <div className="user">
            <p className="username">Ourlime Admin</p>
            <p className="social-handle">@ourlime_admin</p>
          </div>

          <div className="action-btns">
            <button>Message</button>
            <button>Follow</button>
          </div>

          <div className="stats">
            <div className="stat">
                <p className="stat-value">11</p>
                <p className="stat-label">Following</p>
            </div>
            <div className="stat">
              <p className="stat-value">16</p>
              <p className="stat-label">Posts</p>
            </div>
            <div className="stat">
              <p className="stat-value">6</p>
              <p className="stat-label">Followers</p>
            </div>
          </div>
        </div>

        <aside className="recent-chats">
          <div className="header">
            <h2>Chats</h2>

            <PeopleAltIcon className="chat-btn"/>
            <SettingsIcon className="chat-btn"/>
            
          </div>

          <div className="container">
            <form>
              <input type="text" name="search" placeholder="Search" />
            </form>

            <div className="recent-chats-list">
              
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" 
                  />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>

              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" 
                  />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Rishi Kowlesser</p>
                </div>
              </div>

              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" 
                  />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Raushawn Mitchell</p>
                </div>
              </div>

              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Kyle Nagee</p>
                </div>
              </div>

              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" 
                  />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Josiah James</p>
                </div>
              </div>

              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Neola Hernadez</p>
                </div>
              </div>
              
            </div>

          </div>

        </aside>

        
    </section>
  )
}
