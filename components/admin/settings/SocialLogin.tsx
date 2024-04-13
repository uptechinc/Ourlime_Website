import SwitchButton from "../SwitchButton";

export default function SocialLogin() {
    return (
      <div className="social-settings main-layout">
        <div className="left">
          <div className="other-config button-layout">
            <h3>Upload & File Sharing Configuration</h3>

            <div className="wrapper">
              <div className="top">
                <span>Facebook Login</span>
                <SwitchButton />
              </div>
              <p className="bottom">Enable the ability for users to login to your site using their Facebook account.</p>
            </div>
            <br />

            <hr />
            <br />

            <div className="wrapper">
              <div className="top">
                <span>Google Login</span>
                <SwitchButton />
              </div>
              <p className="bottom">Enable the ability for users to login to your site using their Google+ account, (App requires reviewing)</p>
            </div>
          </div>


        </div>

        <div className="right">
          <div className="general-config button-layout">
            <h3>Setup Social Login API Keys</h3>
            <div className="wrapper input-data">
                <p className='sub-heading' 
                  style={{
                    backgroundColor: '#1877f2', 
                    color: 'white',
                    borderRadius: '1rem',
                    padding: '1rem',
                    width:  'fit-content'
                    }}>Facebook Configuration</p>
                  <input type="text" placeholder="Application ID"/>
                  <br />
                  <input type="text" placeholder="Application Secret Key"/>
            </div>
            <br />

            <hr />

            <div className="wrapper input-data">
                <p className='sub-heading'
                style={{
                  backgroundColor: '#dd5144', 
                  color: 'white',
                  borderRadius: '1rem',
                  padding: '1rem',
                  width:  'fit-content'
                  }}>Google Configuration</p>
                  <input type="text" placeholder="Client ID"/>
                  <br />
                  <input type="text" placeholder="Client Secret Key"/>
            </div>

          </div>

        </div>
      </div>
    )
  }
  