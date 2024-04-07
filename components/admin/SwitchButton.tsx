'use client'

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
export default function SwitchButton() {
    const [isSwitched, setIsSwitched] = useState(false);
    function handleSwitch() {
        setIsSwitched((prev) => !prev);
    }
    return (
    <div onClick={handleSwitch}  className={`switch ${isSwitched === true ? 'switchedBackground':''}`}>
        {isSwitched === false ? 
            <CloseIcon className='button' /> : 
            <CheckIcon className='switched' />
        }
    </div>
  )
}
