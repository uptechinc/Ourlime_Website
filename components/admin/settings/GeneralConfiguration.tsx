

import { useState } from 'react';
import SwitchButton from '../SwitchButton';
export default function GeneralConfiguration() {
  
  return (
    <div className="general-configuration">
      <div className="left">
        <h3>General Configuration</h3>

        <div className="maintenance">
          <div className="top">
            <span>Maintenance Mode</span>
            <SwitchButton />
          </div>
          <p className="bottom">Turn the whole site under Maintenance.</p>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
