
export default function EmailAndSms() {
    return (
      <div className="email-settings main-layout">
      <div className="left">
        <div className="other-config button-layout">
          <h3>Upload & File Sharing Configuration</h3>

          <div className="wrapper">
            <div className="top">
              <span>File Upload & Sharing</span>
              <SwitchButton />
            </div>
            <p className="bottom">By enabling this feature, the user can share and upload files in your site.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>Video Upload & Sharing</span>
              <SwitchButton />
            </div>
            <p className="bottom">Turn on the ability for users to share and upload videos.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>Reels Upload</span>
              <SwitchButton />
            </div>
            <p className="bottom">Turn on the ability for users to share and upload reels.</p>
          </div>

          <hr />

          <div className="wrapper">
            <div className="top">
              <span>Audio Upload & Sharing </span>
              <SwitchButton />
            </div>
            <p className="bottom">Turn on the ability for users to share and upload music and audio files.</p>
          </div>

          <hr />

        </div>

      </div>

      <div className="right">
        <div className="general-config button-layout">

          <div className="wrapper input-data">
              <p className='sub-heading'>Allow Extensions</p>
              <input type="text" value="AIzaSyBOfpaMO_tMMsuvS2T4zx4llbtsFqMuT9Y"/>
              <p className="bottom">Only those type of files user can upload to your site. (separated with comma,)</p>
          </div>

          <div className="wrapper input-data">
              <p className='sub-heading'>Allowed MIME Types</p>
              <input type="text" value="text/plain,video/mp4,video/mov,video/mpeg,video/flv,video/avi,video/webm,audio/wav,audio/mpeg,video/quicktime,audio/mp3,image/png,image/jpeg,image/gif,application/pdf,application/msword,application/zip,application/x-rar-compressed,text/pdf,application/x-pointplus,text/css"/>
              <p className="bottom">Only those MIME-type of files user can upload to your site. (separated with comma,)</p>
          </div>

          <hr />

          <div className="wrapper input-data">
              <p className='sub-heading'>Max Upload Size</p>
              <select>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <p className="bottom">This key is required for importing or posting YouTube videos.</p>
          </div>

        </div>

      </div>
    </div>
    )
  }

  import SwitchButton from "../SwitchButton";

  
  