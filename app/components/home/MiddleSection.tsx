import Image from "next/image";
import ourlimeImage from '@/public/images/ourlime logo.png'
import userPicture from '@/public/images/userPicture.png'
import popUpButton from '@/public/images/Pop Up Button.svg'
import blackWoman from '@/public/images/blackWoman.jpg'
import sonic from '@/public/images/sonic.jpg'
import tech from '@/public/images/tech.jpg'
import trees from '@/public/images/trees.jpg'
export default function MiddleSection() {
    return (
        <section className="middle-section">
        
            <div className="post-container">

                <div className="post-profilePicture-wrapper">
                    <Image 
                    src = {ourlimeImage} 
                    alt = "profile picture" 
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



            {/* Social Media Posts */}
            <div className="posts">
                <div className="social-posts">

                    <div className="top">
                    
                    <div className="post-profilePicture-wrapper">
                        <Image 
                        src = {blackWoman} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>
                    
                    <p className="username">Nicole</p>
                    
                    <p className="time-check">2 mins</p>
                    </div>
            
            
                    <div className="center">
                        <p className="post-content">
                            Hey there, eco-friends! 🙌

                            Today, I took a stroll through the whispering pines and couldn't help but feel a deep connection with the symphony of nature. It's moments like these that remind me why we need to step up our game in environmental conservation. 🌳✨
                            <span>Read More ...</span>
                        </p>

                        <div className="image-wrapper">
                            <Image src={trees} alt="trees" quality={100} />
                        </div>                                            
                        <div className="interactive-icons">
                            <div className="likes">23k</div>
                            <div className="comments">115</div>
                            <div className="share">Share</div>
                            <div className="profile-pictures">
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                            </div>
                        
                        I</div>
                    
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
                        src = {sonic} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>
                    
                    <p className="username">Rishi</p>
                    
                    <p className="time-check">20 mins</p>
                    </div>
            
            
                    <div className="center">
                        <p className="post-content">

                            🚀 Tech Innovations: Shaping Our Tomorrow 💡

                            Hey Tech Enthusiasts! 👋

                            What a time to be alive in the tech world! Just wrapped up a week exploring the latest gadgets at the annual TechNow conference, and my mind is blown! 🤯

                            From AI-driven home assistants that not only understand your mood but also suggest activities, to VR setups that can virtually transport you to Mars, innovation is at an all-time high! 🏠👽

                            But what really caught my attention was the breakthrough in sustainable tech. Solar panels as thin as paper, yet as powerful as traditional panels, and smartphones made from recycled materials that are fully biodegradable. We're not just thinking smart; we're thinking forward. 🌞♻️

                            It's not the gadgets that excite me the most; it's the potential they have to change lives. Imagine remote education with AR that brings the classroom to you, or medical drones delivering aid in record time. The future is about tech with a heart. ❤️🛸

                            What tech advancements are you most excited about? Drop a comment below and let's geek out about the innovations that are reshaping our world!

                            #TechNow #FutureIsNow #Innovation #SustainableTech #SmartTech #TechWithAHeart                        
                        </p>
                    
                        <div className="interactive-icons">
                            <div className="likes">23k</div>
                            <div className="comments">115</div>
                            <div className="share">Share</div>
                            <div className="profile-pictures">
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
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
                        src = {tech} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>
                    
                    <p className="username">Rishi</p>
                    
                    <p className="time-check">1 min</p>
                    </div>
            
            
                    <div className="center">
                        <p className="post-content">
                            Gamers, Assemble! 🌟

                            Just when we thought games couldn't get more immersive, the latest wave of gaming tech has us rethinking what's possible! I've just spent the weekend testing out the newest console on the block, and let me tell you, it's like stepping into the future. 🌌

                            We're talking crystal-clear 8K resolution, frame rates that make gameplay smoother than ever, and AI-driven personal game assistants that adapt to your play style. It's not just gaming; it's a doorway to new worlds! 🤩

                            But it's not all about the specs. It's about the stories, the adventures, and the communities we build along the way. Indie developers are bringing heart and soul into their games, proving once again that a powerful narrative can be as gripping as stunning visuals. 📖❤️

                            And can we talk about cross-platform play? The barriers are down, friends! You can now team up (or face off) with players regardless of the device. It's a united gaming universe, and everyone's invited to the party. 🎉🌐

                            So, what's your current gaming obsession? Are you a solo adventurer or a co-op champion? Share your latest gaming feats and favorite in-game moments!

                            #GamingLife #NextGenConsoles #IndieGameDev #8KGaming #CrossPlatformPlay #GamerCommunity  
                        </p>
                    
                        <div className="interactive-icons">
                            <div className="likes">23k</div>
                            <div className="comments">115</div>
                            <div className="share">Share</div>
                            <div className="profile-pictures">
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                        
                            <div className="profile-picture">
                                <Image src={userPicture} alt="User profile picture" quality={100}/>
                            </div>
                            </div>
                        
                        </div>
                    
                        <form>
                            <textarea name="comment" placeholder="Type your comment here..."/>
                        </form>
                    </div>
            
                    <div className="bottom"></div>
                </div>

            </div>

        </section>
    )
}
