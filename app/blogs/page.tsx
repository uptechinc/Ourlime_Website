import Image from 'next/image'

import '@/styles/components/blogs/styles.css'
import post1 from '@/public/images/blogs/post1.jpg'
import post2 from '@/public/images/blogs/post2.jpg'
import post3 from '@/public/images/blogs/post3.jpg'
import post4 from '@/public/images/blogs/post4.jpg'
import post5 from '@/public/images/blogs/post5.jpg'
import post6 from '@/public/images/blogs/post6.jpg'
import post7 from '@/public/images/blogs/post7.jpg'
import post8 from '@/public/images/blogs/post8.jpg'
import post9 from '@/public/images/blogs/post9.jpg'

export default function Blogs() {
  return (
    <main>
        <header>
            <h1>Blogs</h1>
        </header>

        <div className="categories-container">
            <h2>Categories</h2>
            <div className="filter-btns">
                <span>Cars and Vehicles</span>
                <span>Comedy</span>
                <span>Economics and Trade</span>
                <span>Education</span>
                <span>Entertainment</span>
                <span>Movies & Animation</span>
                <span>Gaming</span>
                <span>History</span>
                <span>Live style</span>
                <span>Natural</span>
                <span>News and Politics</span>
                <span>People and Nations</span>
                <span>Pets and Animals</span>
                <span>Places and Regions</span>
                <span>Science and Technology</span>
                <span>Sport</span>
                <span>Travel Events</span>
                <span>Other</span>
            </div>
        </div>

        <section className="recent-articles-container">
            <h2>Most recent articles</h2>
            <hr />

            <form>
                <input type="text" name="search" placeholder="Search for articles" />
            </form>

            <div className="posts">

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post1} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Unravelling the Forces Shaping Wearable Market Landscape in...</p>
                    
                    <div className="post-information">
                        <span className="username">Sunita Lawankar </span> ·
                        <span className="date">16 Feb 2024</span>
                    </div>
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post1} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Software as a Service (SaaS) Market Global Trends, Industry...</p>
                   
                    <div className="post-information">
                        <span className="username">Niam Jadhav </span> ·
                        <span className="date">16 Feb 2024</span>
                    </div>
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post9} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Unravelling the Forces Shaping Restaurant Point of Sale...</p>
                    
                    <div className="post-information">
                        <span className="username">sunita lawankar </span> ·
                        <span className="date">16 Feb 2024</span>
                    </div>

                    
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post4} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Future Flare: Illuminating Script Writing Software Market&apos;s...</p>

                    <div className="post-information">
                        <span className="username">sameertope </span> ·
                        <span className="date">16 Feb 2024</span>
                    </div>
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post3} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Visionary Vibes: Navigating the Wafer Cutting Fluids Market&apos;s...</p>

                    <div className="post-information">
                        <span className="username">sameertope </span> ·
                        <span className="date">16 Feb 2024</span>
                    </div>
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post6} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">E-Commerce International Market Outlook, Research,...</p>

                    <div className="post-information">
                        <span className="username">Niam Jadhav </span> ·
                        <span className="date">15 Feb 2024</span>
                    </div>
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post7} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Global Weather Forecasting Systems Market Map in 2024:...</p>

                    <div className="post-information">
                        <span className="username">Sunita Lawankar</span>
                        <span className="date">15 Feb 2024</span>
                    </div>
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post1} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Analyzing Lime Market Size, Share, and Growth Dynamics...</p>
                    

                    <div className="post-information">
                        <span className="username">Rahul Nikambe </span> ·
                        <span className="date">15 Feb 2024</span>
                    </div>
                </div>

                <div className="post">
                    <div className="post-thumbnail-wrapper">
                        <Image 
                        src = {post2} 
                        alt = "profile picture" 
                        quality={100}/>
                    </div>

                    <p className="call-to-action">Metal Cans Market Industry Analysis, Application, And...</p>
                    

                    <div className="post-information">
                        <span className="username">Niam Jadhav </span> ·
                        <span className="date">15 Feb 2024</span>
                    </div>
                </div>
                
            </div>

            <div className="load-more">
                {/* Down arrow*/}
                <svg width="88" height="75" viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.9264 2.84634L44.0005 72L4.07461 2.84634L43.4806 17.407L44.0005 17.5991L44.5204 17.407L83.9264 2.84634Z" stroke="#C64D53" stroke-width="3"/>
                </svg>



                <span>Load more articles</span>
            </div>

        </section>

        <div className="popular-posts-container">
            <h2>Popular posts</h2>
            <hr />

            <ol>
                <li>
                        <div className="post-thumbnail-wrapper">
                            <Image 
                            src = {post1} 
                            alt = "profile picture" 
                            quality={100}/>
                        </div>

                        <div className="info-wrapper">
                            <p className="call-to-action">Unravelling the Forces Shaping Wearable Market Landscape in...</p>
                            
                            <div className="post-information">
                                <span>By</span><span>Sunita Lawankar </span> ·
                            </div>
                        </div>
                </li>

                <li>
                        <div className="post-thumbnail-wrapper">
                            <Image 
                            src = {post1} 
                            alt = "profile picture" 
                            quality={100}/>
                        </div>

                        <div className="info-wrapper">
                            <p className="call-to-action">Unravelling the Forces Shaping Wearable Market Landscape in...</p>
                            
                            <div className="post-information">
                                <span>By</span><span>Sunita Lawankar </span> ·
                            </div>
                        </div>
                </li>

                <li>
                        <div className="post-thumbnail-wrapper">
                            <Image 
                            src = {post1} 
                            alt = "profile picture" 
                            quality={100}/>
                        </div>

                        <div className="info-wrapper">
                            <p className="call-to-action">Unravelling the Forces Shaping Wearable Market Landscape in...</p>
                            
                            <div className="post-information">
                                <span>By</span><span>Sunita Lawankar </span> ·
                            </div>
                        </div>
                </li>

                <li>
                        <div className="post-thumbnail-wrapper">
                            <Image 
                            src = {post1} 
                            alt = "profile picture" 
                            quality={100}/>
                        </div>

                        <div className="info-wrapper">
                            <p className="call-to-action">Unravelling the Forces Shaping Wearable Market Landscape in...</p>
                            
                            <div className="post-information">
                                <span>By</span><span>Sunita Lawankar </span> ·
                            </div>
                        </div>
                </li>

                <li>
                        <div className="post-thumbnail-wrapper">
                            <Image 
                            src = {post1} 
                            alt = "profile picture" 
                            quality={100}/>
                        </div>

                        <div className="info-wrapper">
                            <p className="call-to-action">Unravelling the Forces Shaping Wearable Market Landscape in...</p>
                            
                            <div className="post-information">
                                <span>By</span><span>Sunita Lawankar </span> ·
                            </div>
                        </div>
                </li>

            </ol>

        </div>
    </main>
  )
}
