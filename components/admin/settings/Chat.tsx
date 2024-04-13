import Link from "next/link";
import SwitchButton from "../SwitchButton";

export default function Chat() {
    return (
      <div className="chat-settings main-layout">
      <div className="left">
        <div className="other-config button-layout">
          <h3>Twilio API Configuration</h3>

          <div className="wrapper">
            <div className="top">
              <span>Twilio Video / Audio Calls</span>
              <SwitchButton />
            </div>
            <p className="bottom">Enable Twilio to start video chat service in your website.</p>
          </div>

          <hr />

          <div className="wrapper input-data">
              <p className='sub-heading'>Live accountSid</p>
              <input type="text" value=""/>
          </div>

          <div className="wrapper input-data">
              <p className='sub-heading'>apiKeySid</p>
              <input type="password" placeholder="********"/>
          </div>



        </div>

      </div>

      
      </div>
    )
  }
  