import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
export default function Dashboard() {
    return (
    <div className="dashboard">
        <h1>Welcome back, Uptech Incorporated Ltd</h1>
        <div className='nav'>
            <HomeRoundedIcon /> <span>Home</span> &gt; <a>DASHBOARD</a>
        </div>

        <div className="stats">
            <div className='flex-box'>
                <p>Total Users</p>
                <div className='bottom'>
                    <PeopleAltRoundedIcon /> 328
                </div>
            </div>
            <div className='flex-box'>
                <p>Total Posts</p>
                <div className='bottom'>
                    <BorderColorRoundedIcon  /> 1,120
                </div>
            </div>
            <div className='flex-box'>
                <p>Total Pages</p>
                <div className='bottom'>
                    <FlagRoundedIcon /> 11
                </div>
            </div>
            <div className='flex-box'>
                <p>Total Groups</p>
                <div className='bottom'>
                    <PeopleAltRoundedIcon /> 5
                </div>
            </div>
            <div className='flex-box'>
                <p>Online Users</p>
                <div className='bottom'>
                    <PeopleAltRoundedIcon /> 0
                </div>
            </div>
            <div className='flex-box'>
                <p>Total Comments</p>
                <div className='bottom'>
                    <MessageRoundedIcon /> 3
                </div>
            </div>
            <div className='flex-box'>
                <p>Total Games</p>
                <div className='bottom'>
                    <SportsEsportsRoundedIcon /> 2
                </div>
            </div>
            <div className='flex-box'>
                <p>Total Messages</p>
                <div className='bottom'>
                    <MessageRoundedIcon /> 10
                </div>
            </div>
        </div>
    </div>
    )
}
