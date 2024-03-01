import Image from 'next/image'
import logo from '@/public/images/logo-long.png'
import ourlimeProfilePicture from '@/public/images/transparent ourlime logo.png'

export default function Header() {
    return (
        <header>
            <div className="left">
                <div className="logo-wrapper">
                    <Image 
                        src = {logo}
                        alt="logo"
                        priority
                        />
                </div>

                    <form>
                        <button className="search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                        <input type="text" placeholder="Search" />
                    </form>
            </div>

            <div className='right'>
                <a href="#" className="nav-link " title="Notifications" data-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                </a>

                <div className="profile-container">
                    <div className="profile-picture-wrapper">
                        <Image 
                            src = {ourlimeProfilePicture}
                            alt="logo"
                            priority
                        />
                    </div>

                    <p>Uptech Incorporated Ltd</p>
                </div>
            </div>
        </header>
    )
}
