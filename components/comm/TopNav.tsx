'use client'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
export default function TopNav() {
    const pathname = usePathname();
    const router = useRouter();
  return (
    <div className='admin-top-nav-layout'>
      <h1>
        {pathname === "/admin" && " Welcome back, Uptech Incorporated Ltd"}
        {pathname === "/admin/settings/general" && "General Configuration"}
        {pathname === "/admin/settings/website-information" && "Website Information"}
        {pathname === "/admin/settings/file" && "File Upload Configuration"}
        {pathname === "/admin/settings/email" && "E-mail & SMS Setup"}
        {pathname === "/admin/settings/chat" && "Video & Audio Settings"}
        {pathname === "/admin/settings/social-login" && "Social Login Settings"}        
        {pathname === "/admin/settings/ai" && "AI Settings"}
      </h1>

        <div className="top-nav">
            <HomeRoundedIcon /> 
            <span style={{ cursor: "pointer" }} onClick={()=> router.push('/admin')}> Home &gt; </span>
            {pathname === '/admin' && (<a>DASHBOARD</a>)}

            {pathname.includes('/settings') && (
                <React.Fragment>
                    <span 
                        style={{ cursor: "pointer" }} 
                        onClick={()=> router.push('/admin/settings/general')}>
                            Settings &gt;
                    </span> 
                    <a>
                        {pathname === "/admin/settings/general" && "General Configuration"}
                        {pathname === "/admin/settings/website-information" && "Website Information"}
                        {pathname === "/admin/settings/file" && "File Upload Configuration"}
                        {pathname === "/admin/settings/email" && "E-mail & SMS Setup"}
                        {pathname === "/admin/settings/chat" && "Video & Audio Settings"}
                        {pathname === "/admin/settings/social-login" && "Social Login Settings"}                        
                        {pathname === "/admin/settings/ai" && "AI Settings"}
                    </a>
                </React.Fragment>
            )}

        </div>        
       
    </div>
  )
}
