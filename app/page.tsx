import Image from "next/image";
import ourlimeImage from '@/public/images/ourlime logo.png'
import popUpButton from '@/public/images/Pop Up Button.svg'
import userPicture from '@/public/images/userPicture.png'
import "@/app/styles/home.css"
// import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function Home() {
  return (
    <main>
      <section className="left-section">

        <div className="profile-stats">

          <div className="image-wrapper">
            <Image src = {ourlimeImage} alt = "profile picture" />
          </div>

          <div className="user">
            <p className="username">Ourlime Admin</p>
            <p className="social-handle">@darren07</p>
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

            <p>ico</p>
            <p>ico</p>
            
          </div>

          <div className="container">
            <form>
              <input type="text" name="search" placeholder="Search" />
            </form>

            <div className="recent-chats-list">
              
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>

              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>
              <div className="contact">
                <div className="image-wrapper">
                  <Image src = {userPicture} alt = "profile picture" />
                </div>

                <div className="recent-chats-item-info">
                  <p className="recent-chats-item-info-username">Aaron Hazzard</p>
                </div>
              </div>

            </div>

          </div>

        </aside>

        
      </section>




      <section className="middle-section">
        
        <div className="post-container">

          <div className="post-profilePicture-wrapper">
            <Image 
              src = {ourlimeImage} 
              alt = "profile picture" 
              layout="responsive"
              objectFit="cover"
              quality={100}/>
          </div>

          <form>
            <input type="text" name="content" placeholder="What's going on?"/>
          </form>

          <div className="input-btns">
            <button className="gallery-btn"> 
              {/* <svg data-testid="CameraAltIcon"></svg> */}
              Gallery
            </button>

            <button className="emojis-btn">Feelings/Activities</button>
          
            {/* More Button */}
           
            <div className="svg-wrapper">
              <svg width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21.5" cy="21.5" r="21.5" fill="#D9D9D9"/>
                <circle cx="21" cy="29" r="3" fill="black"/>
                <circle cx="21" cy="14" r="3" fill="black"/>
              </svg>            
            </div>

          </div>

        </div>




       <section className="posts">
         {/* Social Media Posts */}
         <div className="social-posts">

    <div className="top">
      
      <div className="post-profilePicture-wrapper">
        <Image 
          src = {ourlimeImage} 
          alt = "profile picture" 
          layout="responsive"
          objectFit="cover"
          quality={100}/>
      </div>
      
      <p className="username">Rishi</p>
      
      <p className="time-check">2 min</p>
    </div>
      
      
    <div className="center">
      <p className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      
      <div className="interactive-icons">
        <div className="likes">23k</div>
        <div className="comments">115</div>
        <div className="share">Share</div>
        <div className="profile-pictures">
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
      
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
      
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
      
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
        </div>
      
      </div>
      
      <form>
        <textarea name="comment" placeholder="Type your comment here..."/>
      </form>
    </div>
      
    <div className="bottom"></div>
    </div>
    <div className="social-posts">
      
    <div className="top">
      
      <div className="post-profilePicture-wrapper">
        <Image 
          src = {ourlimeImage} 
          alt = "profile picture" 
          layout="responsive"
          objectFit="cover"
          quality={100}/>
      </div>
      
      <p className="username">Rishi</p>
      
      <p className="time-check">2 min</p>
    </div>
      
      
    <div className="center">
      <p className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      
      <div className="interactive-icons">
        <div className="likes">23k</div>
        <div className="comments">115</div>
        <div className="share">Share</div>
        <div className="profile-pictures">
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
      
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
      
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
      
          <div className="profile-picture">
            <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
          </div>
        </div>
      
      </div>
      
      <form>
        <textarea name="comment" placeholder="Type your comment here..."/>
      </form>
    </div>
      
    <div className="bottom"></div>
    </div>
    <div className="social-posts">
      
    <div className="top">
      
    <div className="post-profilePicture-wrapper">
    <Image 
    src = {ourlimeImage} 
    alt = "profile picture" 
    layout="responsive"
    objectFit="cover"
    quality={100}/>
    </div>
      
    <p className="username">Rishi</p>
      
    <p className="time-check">2 min</p>
    </div>
      
      
    <div className="center">
    <p className="post-content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
      
    <div className="interactive-icons">
    <div className="likes">23k</div>
    <div className="comments">115</div>
    <div className="share">Share</div>
    <div className="profile-pictures">
    <div className="profile-picture">
    <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
    </div>
      
    <div className="profile-picture">
    <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
    </div>
      
    <div className="profile-picture">
    <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
    </div>
      
    <div className="profile-picture">
    <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
    </div>
    </div>
      
    </div>
      
    <form>
    <textarea name="comment" placeholder="Type your comment here..."/>
    </form>
    </div>
      
    <div className="bottom"></div>
    </div>
    <div className="social-posts">
      
    <div className="top">
      
      <div className="post-profilePicture-wrapper">
        <Image 
          src = {ourlimeImage} 
          alt = "profile picture" 
          layout="responsive"
          objectFit="cover"
          quality={100}/>
      </div>
      
      <p className="username">Rishi</p>
      
      <p className="time-check">2 min</p>
    </div>
      
      
    <div className="center">
    <p className="post-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
      
    <div className="interactive-icons">
      <div className="likes">23k</div>
      <div className="comments">115</div>
      <div className="share">Share</div>
      <div className="profile-pictures">
        <div className="profile-picture">
          <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
        </div>
      
        <div className="profile-picture">
          <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
        </div>
      
        <div className="profile-picture">
          <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
        </div>
      
        <div className="profile-picture">
          <Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
        </div>
      </div>

</div>

<form>
  <textarea name="comment" placeholder="Type your comment here..."/>
</form>
</div>

<div className="bottom"></div>
</div>
<div className="social-posts">

<div className="top">

<div className="post-profilePicture-wrapper">
<Image 
src = {ourlimeImage} 
alt = "profile picture" 
layout="responsive"
objectFit="cover"
quality={100}/>
</div>

<p className="username">Rishi</p>

<p className="time-check">2 min</p>
</div>


<div className="center">
<p className="post-content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<div className="interactive-icons">
<div className="likes">23k</div>
<div className="comments">115</div>
<div className="share">Share</div>
<div className="profile-pictures">
<div className="profile-picture">
<Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
</div>

<div className="profile-picture">
<Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
</div>

<div className="profile-picture">
<Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
</div>

<div className="profile-picture">
<Image src={userPicture} alt="User profile picture" layout="fill" objectFit="cover" quality={100}/>
</div>
</div>

</div>

<form>
<textarea name="comment" placeholder="Type your comment here..."/>
</form>
</div>

<div className="bottom"></div>
</div>
       </section>

      </section>



      <section className="right-section"></section>
    </main>
  );
}
