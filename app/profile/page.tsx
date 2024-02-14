import '@/app/styles/components/profile/profile.css'
import Image from 'next/image'
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import profilePicture from '@/public/images/profilePicture.webp'

export default function profile() {
    return(
    <div className='profile-main-container'>
        <section className="profile-top-section">
            <div className="info-container">
                <div className="profile-image-container">
                    <Image src = {profilePicture} alt = "profile picture"/>
                </div>
                <div className="profile-info">
                    <p>Darren Kowlessar</p>
                    <p>@dareen07</p>
                    <button>Edit</button>
                    <button>Activities</button>
                    <p>11</p>
                    <p>16</p>
                    <p>6</p>
                    <p>Following</p>
                    <p>Posts </p>
                    <p>Followers</p>



                </div>
            </div>
        </section>
    </div>
    )
}
