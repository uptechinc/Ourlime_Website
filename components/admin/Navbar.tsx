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
export default function Navbar() {
  return (
    <nav>
        <ul>
            <li className='dashboard-item'><DashboardIcon /><span>Dashboard</span></li>
            <li><SettingsIcon />Settings <AddRoundedIcon className="plus-icon" /></li>
            <li><ViewAgendaRoundedIcon />Manage Features <AddRoundedIcon className="plus-icon" /></li>
            <li><LanguageRoundedIcon />Languages <AddRoundedIcon className="plus-icon" /></li>
            <li><PeopleAltRoundedIcon />Users <AddRoundedIcon className="plus-icon" /></li>
            <li><AttachMoneyRoundedIcon />Payments & Ads <AddRoundedIcon className="plus-icon" /></li>
            <li><StarsRoundedIcon />Pro System <AddRoundedIcon className="plus-icon" /></li>
            <li><ColorLensRoundedIcon />Design <AddRoundedIcon className="plus-icon" /></li>
            <li><BuildRoundedIcon />Tools <AddRoundedIcon className="plus-icon" /></li>
            <li><DescriptionRoundedIcon />Pages <AddRoundedIcon className="plus-icon" /></li>
            <li><WarningRoundedIcon />Reports <AddRoundedIcon className="plus-icon" /></li>
            <li><SwapHorizRoundedIcon />API Settings <AddRoundedIcon className="plus-icon" /></li>
        </ul>
    </nav>
  )
}
