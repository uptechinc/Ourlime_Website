import '@/app/styles/components/profile/profile.css'
import Image from 'next/image'
import React, { memo } from 'react'
import profilePicture from '@/public/images/profilePicture.webp'
import admin from '@/public/images/OIP.jpg'
import blackWoman from '@/public/images/blackWoman.jpg'
import anime from '@/public/images/lucky star.jpg'


const communitiesData = [
    { imageUrl: '/images/hands.webp', name: 'Community 1' },
    { imageUrl: '/images/computer.webp', name: 'Community 2' },
    { imageUrl: '/images/car.jpg', name: 'Community 3', newPosts: 6 },
    // ... add other communities as needed
  ];

export default function profile() {
    return(
        <div className='profile-main-container'>
        <section className="profile-top-section">
            <div className="info-container">
                <div className="profile-image-container">
                    <Image src={admin} alt="profile picture"/>
                </div>
                <div className="profile-info">
                    <p className='nickname'>Darren Kowlessar</p>
                    <p className="mention">@dareen07</p>
                    <div className="profile-btns">
                        <button className="edit-btn">Edit</button>
                        <button className="activity-btn">Activities</button>
                    </div>
                    <div className="numbers">
                        <p>11 Following</p>
                        <p>16 Posts</p>
                        <p>6 Followers</p>
                    </div>
                </div>
            </div>
        </section>
        <div>
            <nav className='timeline-nav'>
                <ul>
                    <li className="active">Timeline</li>
                    <li>Communities</li>
                    <li>Likes</li>
                    <li>Following</li>
                    <li>Photos</li>
                    <li>Followers</li>
                    <li>Videos</li>
                </ul>
            </nav>
            <section className='bottom-half'>
                <div className="timeline">

                    <div className="post-container">

                        <div className="post-profilePicture-wrapper">
                            <Image src = {admin} alt = "profile picture" quality={100}/>
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
                   
                    <div className="post">
                            <div className="post-content">
                                <div className="poster-details">
                                    <Image src= {blackWoman} alt="User Avatar" className="avatar"/>
                                    <p className="username">Marina</p>
                                    <p className="timestamp">2 min</p>
                                </div>
                                <Image src={anime} alt="Post" className="post-image"/>
                                    <div className="interactions">
                                        <span className="likes">23k</span>
                                        <span className="comments">115</span>
                                        <span className="share">Share</span>
                                        <div className="profile-pics">
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                        </div>
                                    </div>
                                <input type="text" placeholder="Type your comments here..." className="comment-input"/>
                            </div>
                    </div>

                    <div className="post">
                            <div className="post-content">
                                <div className="poster-details">
                                    <Image src= {blackWoman} alt="User Avatar" className="avatar"/>
                                    <p className="username">Marina</p>
                                    <p className="timestamp">2 min</p>
                                </div>
                                <Image src={anime} alt="Post" className="post-image"/>
                                    <div className="interactions">
                                        <span className="likes">23k</span>
                                        <span className="comments">115</span>
                                        <span className="share">Share</span>
                                        <div className="profile-pics">
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                        </div>
                                    </div>
                                <input type="text" placeholder="Type your comments here..." className="comment-input"/>
                            </div>
                    </div>

                    <div className="post">
                            <div className="post-content">
                                <div className="poster-details">
                                    <Image src= {blackWoman} alt="User Avatar" className="avatar"/>
                                    <p className="username">Marina</p>
                                    <p className="timestamp">2 min</p>
                                </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ligulacondimentum ligula donec varius proin.  Nibhsit mollis odio et a primis ut.  Ametfaucibus sed iaculis viverra posuere molestie maximus.  Crasnisi nunc eros diam luctus faucibus.  Arcuamet aenean augue amet.  Urnarhoncus justo varius eu maecenas.</p>
                                    <div className="interactions">
                                        <span className="likes">23k</span>
                                        <span className="comments">115</span>
                                        <span className="share">Share</span>
                                        <div className="profile-pics">
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                        </div>
                                    </div>
                                <input type="text" placeholder="Type your comments here..." className="comment-input"/>
                            </div>
                    </div>

                    <div className="post">
                            <div className="post-content">
                                <div className="poster-details">
                                    <Image src= {blackWoman} alt="User Avatar" className="avatar"/>
                                    <p className="username">Marina</p>
                                    <p className="timestamp">2 min</p>
                                </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ligulacondimentum ligula donec varius proin.  Nibhsit mollis odio et a primis ut.  Ametfaucibus sed iaculis viverra posuere molestie maximus.  Crasnisi nunc eros diam luctus faucibus.  Arcuamet aenean augue amet.  Urnarhoncus justo varius eu maecenas.</p>
                                    <div className="interactions">
                                        <span className="likes">23k</span>
                                        <span className="comments">115</span>
                                        <span className="share">Share</span>
                                        <div className="profile-pics">
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                            <div className="profile-pic">
                                                <Image src={admin} alt="user profile pic" quality="100"/>
                                            </div>
                                        </div>
                                    </div>
                                <input type="text" placeholder="Type your comments here..." className="comment-input"/>
                            </div>
                    </div>
                </div>

                <div className="right-containers">
                    <div className="about-container">
                        <h2>About</h2>
                        <p>I am a business man.</p>
                    </div>
                    <div className="communities-container">
                        <div className="communities-info">
                            <h2>Communities</h2>
                            <h2>9</h2>
                            <a className="view all">View all</a>
                        </div>
                        <div className="communities-photos">
                            {communitiesData.map((community, index) => (
                                <div className="community" key={index}>
                                <Image 
                                    src={community.imageUrl} 
                                    alt={community.name} 
                                    width={200} // Set appropriate width
                                    height={200} // Set appropriate height
                                    className="community-image"
                                />
                                {community.newPosts && (
                                    <span className="new-posts-badge">{community.newPosts}</span>
                                )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="likes-container">
                        <h2>Likes</h2>
                        <p>You have no photos.</p>
                    </div>
                    <div className="following-container">
                        <div className="following-info">
                            <h2>Following</h2>
                            <h2>11</h2>
                            <p>View all</p>
                        </div>
                        <div className="following-photos">
                            {communitiesData.map((community, index) => (
                                <div className="following" key={index}>
                                <Image 
                                    src={community.imageUrl} 
                                    alt={community.name} 
                                    width={200} // Set appropriate width
                                    height={200} // Set appropriate height
                                    className="following-image"
                                />
                                {community.newPosts && (
                                    <span className="new-posts-badge">{community.newPosts}</span>
                                )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="photos-container">
                        <h2>Photos</h2>
                        <p>You have no photos.</p>
                    </div>
                    <div className="followers-container">
                        <div className="followers-info">
                            <h2>Followers</h2>
                            <h2>11</h2>
                            <p>View all</p>
                        </div>
                        <div className="followers-photos">
                            {communitiesData.map((community, index) => (
                                <div className="followers" key={index}>
                                <Image 
                                    src={community.imageUrl} 
                                    alt={community.name} 
                                    width={200} // Set appropriate width
                                    height={200} // Set appropriate height
                                    className="followers-image"
                                />
                                {community.newPosts && (
                                    <span className="new-posts-badge">{community.newPosts}</span>
                                )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="videos-container">
                        <h2>Videos</h2>
                        <p>You have no videos.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}
