'use client'

import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BuildIcon from '@mui/icons-material/Build';
import Link from 'next/link'
import { useState } from 'react';
export default function Navbar() {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);
    const [isProSystemOpen, setIsProSystemOpen] = useState(false);
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const [isAPIsOpen, setAPIIsOpen] = useState(false);


    const toggleDropDown = (params: String) => {
        if(params === 'settings')  setIsSettingsOpen(prev => !prev); 
        else if(params === 'features') setIsFeaturesOpen(prev => !prev);
        // else if(params === 'payments') setIsPaymentsOpen(prev => !prev);
        // else if(params === 'proSystem') setIsProSystemOpen(prev => !prev);
        else if(params === 'users') setIsUsersOpen(prev => !prev);
        else if(params === 'tools') setIsToolsOpen(prev => !prev);
        else if(params === 'APIs') setAPIIsOpen(prev => !prev);
        else alert('List doesn\'t doesn\'t')
    }

    return (
    <nav>
        <ul>
            <li className='dashboard-item'><DashboardIcon /><Link href="/admin">Dashboard</Link></li>
            
            <li onClick={()=> toggleDropDown('settings')}>
                <SettingsIcon />Settings <AddRoundedIcon className="plus-icon" />
                
            </li>
            <ul className={`dropdown-content ${isSettingsOpen ? 'show' : 'hide'}`}>
                    <li><Link href="/admin/settings/general">General Configuration</Link></li>
                    <li><Link href="/admin/settings/website-information">Website Information</Link></li>
                    <li><Link href="/admin/settings/file">File Upload Configuration</Link></li>
                    <li><Link href="/admin/settings/email">E-Mail & SMS Setup</Link></li>
                    <li><Link href="/admin/settings/chat">Chat & Video/Audio</Link></li>
                    <li><Link href="/admin/settings/social-login">Social Login Settings</Link></li>
                    <li><Link href="/admin/settings/ai">AI Settings</Link></li>

                    {/* <div className="dropdown-content">
                        <li><Link href="/admin/settings/posts/settings">Posts Settings</Link></li>
                        <li><Link href="/admin/settings/posts/reactions">Post Reactions</Link></li>
                        <li><Link href="/admin/settings/posts/live">Setup Live Streaming</Link></li>
                    </div> */}
            </ul>
            
            <li onClick={()=> toggleDropDown('features')}>
                <ViewAgendaRoundedIcon />Manage Features <AddRoundedIcon className="plus-icon" />
                <div className="dropdown-content">
                    
                </div>
            </li>
            <ul className={`dropdown-content ${isFeaturesOpen ? 'show' : ''}`}>
                    <li><Link href="/admin/features/toggle">Enable / Disable Features</Link></li>
                    <li><Link href="/admin/features/groups">Groups</Link></li>
                    <li><Link href="/admin/features/posts">Posts</Link></li>
                    <li><Link href="/admin/features/jobs">Jobs</Link></li>
                    <li><Link href="/admin/features/articles">Articles</Link></li>
                    <li><Link href="/admin/features/events">Events</Link></li>
                    <li><Link href="/admin/features/ai">Social Media</Link></li>

            </ul>
            
            <li onClick={()=> toggleDropDown('users')}>
                <PeopleAltRoundedIcon />Users <AddRoundedIcon className="plus-icon" />
                <div className="dropdown-content">
                    
                </div>
            </li>
            <ul className={`dropdown-content ${isUsersOpen ? 'show' : ''}`}>
                    <li><Link href="/admin/users/manage/users">Manage Users</Link></li>
                    <li><Link href="/admin/users/manage/stories">Manage User Stories / Status</Link></li>
                    <li><Link href="/admin/users/manage/verification-requests">Manage Verification Requests</Link></li>
                    <li><Link href="/admin/users/manage/genders">Manage genders</Link></li>
                    <li><Link href="/admin/users/online">Online Users</Link></li>
            </ul>

            <li onClick={()=> toggleDropDown('tools')}>
                <BuildIcon />Tools <AddRoundedIcon className="plus-icon" />
                <div className="dropdown-content">
                    
                </div>
            </li>
            <ul className={`dropdown-content ${isToolsOpen ? 'show' : ''}`}>
                    <li><Link href="/admin/tools/manage/emails">Manage Emails</Link></li>
                    <li><Link href="/admin/tools/send-email">Manage User Stories / Status</Link></li>
                    <li><Link href="/admin/tools/announcements">Manage Verification Requests</Link></li>
                    <li><Link href="/admin/tools//genders">Manage genders</Link></li>
                    <li><Link href="/admin/tools/">Online Users</Link></li>
            </ul>

            <li className='coming-soon'>
                <AttachMoneyRoundedIcon />Payments & Ads (Coming Soon) <AddRoundedIcon className="plus-icon" />
                <div className="dropdown-content">
                    
                </div>
            </li>
            <ul className={`dropdown-content`}>
                    <li><Link href="/admin/settings/general">Website Configuration</Link></li>
                    <li><Link href="/admin/settings/website-information">Website Information</Link></li>
                    <li><Link href="/admin/settings/file">Social Media</Link></li>
                    <li><Link href="/admin/settings/email">Social Media</Link></li>
                    <li><Link href="/admin/settings/chat">Social Media</Link></li>
                    <li><Link href="/admin/settings/social-login">Social Media</Link></li>
                    <li><Link href="/admin/settings/ai">Social Media</Link></li>

                    <div className="dropdown-content">
                        <li><Link href="/admin/settings/posts/settings">Posts Settings</Link></li>
                        <li><Link href="/admin/settings/posts/reactions">Post Reactions</Link></li>
                        <li><Link href="/admin/settings/posts/live">Setup Live Streaming</Link></li>
                    </div>
            </ul>
            
            <li className='coming-soon'>
                <StarsRoundedIcon />Pro System (Coming Soon) <AddRoundedIcon className="plus-icon" />
                <div className="dropdown-content">
                    
                </div>
            </li>
            <ul className={`dropdown-content`}>
                    <li><Link href="/admin/settings/general">Website Configuration</Link></li>
                    <li><Link href="/admin/settings/website-information">Website Information</Link></li>
                    <li><Link href="/admin/settings/file">Social Media</Link></li>
                    <li><Link href="/admin/settings/email">Social Media</Link></li>
                    <li><Link href="/admin/settings/chat">Social Media</Link></li>
                    <li><Link href="/admin/settings/social-login">Social Media</Link></li>
                    <li><Link href="/admin/settings/ai">Social Media</Link></li>

                    <div className="dropdown-content">
                        <li><Link href="/admin/settings/posts/settings">Posts Settings</Link></li>
                        <li><Link href="/admin/settings/posts/reactions">Post Reactions</Link></li>
                        <li><Link href="/admin/settings/posts/live">Setup Live Streaming</Link></li>
                    </div>
            </ul>

            
        </ul>
    </nav>
    )
}
