

import { useState } from 'react';
import SwitchButton from '../SwitchButton';

export default function GeneralConfiguration() {
  
  return (
    <div className="general-configuration main-layout">
      <div className="left">
        <div className="general-config button-layout">
          <h3>General Configuration</h3>

          <div className="wrapper">
            <div className="top">
              <span>Maintenance Mode</span>
              <SwitchButton />
            </div>
            <p className="bottom">Turn the entire site under Maintenance.</p>
          </div>
        </div>

        <div className="user-config button-layout">
          <h3>User Configuration</h3>

          <div className="wrapper">
            <div className="top">
              <span>User Last Seen Status</span>
              <SwitchButton />
            </div>
            <p className="bottom">Allow users to set their status, online & last active.</p>
            <hr />
          </div>

          <div className="wrapper">
            <div className="top">
              <span>User Account Deletion</span>
              <SwitchButton />
            </div>
            <p className="bottom">Allow users to delete their accounts.</p>
            <hr />
          </div>
        </div>

        <div className="other-config button-layout">
          <h3>Other Settings</h3>

          <div className="wrapper">
            <div className="input-data">
              <p className='sub-heading'>Censored Words</p>
              <input type="text" />
              <p className="bottom">Words to be censored and replaced with *** in messages, posts, comments etc, separated by a comma.</p>
            </div>

            <div className="input-data">
              <p className='sub-heading'>Exchange rate API Key</p>
              <input type="text" />
              <p className="bottom">Your Exchange rate API Key from here</p>
            </div>

            
            <hr />
          </div>

        
        </div>

      </div>

      <div className="right">
        <div className="general-config button-layout">
          <h3>Login & Registration</h3>

          <div className="wrapper">
            <div className="top">
              <span>User Registration</span>
              <SwitchButton />
            </div>
            <p className="bottom">Allow users to create accounts in your site.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>Password Complexity System</span>
              <SwitchButton />
            </div>
            <p className="bottom">The system will require a powerful password on sign up,
including letters, numbers and special characters.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>Unusual Login</span>
              <SwitchButton />
            </div>
            <p className="bottom">Send a confirmation link when the user login from a new location.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>Remember This Device</span>
              <SwitchButton />
            </div>
            <p className="bottom">Remember this device in welcome page.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>Two-factor authentication</span>
              <SwitchButton />
            </div>
            <p className="bottom">Send confirmation code to email or SMS when user login.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>reCaptcha</span>
              <SwitchButton />
            </div>
            <p className="bottom">Enable reCaptcha to prevent spam.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="input-data">
              <p className='sub-heading'>Recaptcha Key</p>
              <input type="text" />
            </div>

            <div className="input-data">
              <p className='sub-heading'>Recaptcha Secret Key</p>
              <input type="text" />
            </div>

            
            <hr />
          </div>

          <div className="wrapper">
            <div className="top">
              <span>Prevent Bad Login Attempts</span>
              <SwitchButton />
            </div>
            <p className="bottom">Enable this feature to track and stop brute-force attacks.</p>
          </div>

          <div className="wrapper">
            <div className="input-data">
              <p className='sub-heading'>Login Limit</p>
              <input type="text" />
              <p>How many times a user can try to login before a lockout?</p>
            </div>

            <div className="input-data">
              <p className='sub-heading'>Lockout Time (In Minutes)</p>
              <input type="text" />
              <p>For how long should the user stay locked out?</p>
            </div>

            
            <hr />
          </div>

        </div>

      </div>
    </div>
  );
}
