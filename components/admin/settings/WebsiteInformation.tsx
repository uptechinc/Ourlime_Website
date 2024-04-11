import SwitchButton from "../SwitchButton";

export default function WebsiteInformation() {
  return (
    <div className="website-information main-layout">
      <div className="left">
        <div className="other-config button-layout">
          <h3>Website Information</h3>

          <div className="wrapper">
            <div className="input-data">
              <p className='sub-heading'>Website Title</p>
              <input type="text" value="Ourlime Private Communication Network" />
              <p className="bottom">Your website general title, it will appear on Google and on your browser tab.</p>
            </div>

            <div className="input-data">
              <p className='sub-heading'>Website Name</p>
              <input type="text" value="Ourlime"/>
              <p className="bottom">Your website name, it will on website&apos;s footer and E-mails.</p>
            </div>
            
            <hr />

            <div className="input-data">
              <p className='sub-heading'>Website Keywords</p>
              <input type="text" value="social, wowonder, social site"/>
              <p className="bottom">Your website&apos;s keyword, used mostly for SEO and search engines.</p>
            </div>
            
            <hr />

            <div className="input-data">
              <p className='sub-heading'>Website Description</p>
              <textarea value="Discover and connect with private communities on Ourlime. Explore shared interests, recipes, and tips with like-minded individuals."/>
              <p className="bottom">Your website&apos;s description, used mostly for SEO and search engines, Max of 100 characters is recommended</p>
            </div>
            
            <hr />

            <div className="input-data">
              <p className='sub-heading'>Google Analytics Code</p>
              <textarea style={{width: "100%", height: '4rem'}} />
              <p className="bottom">Paste your full Google Analytics Code here to track traffic.</p>
            </div>
            
          </div>

        
        </div>

      </div>

      <div className="right">
        <div className="general-config button-layout">
          <h3>Features API Key & Information</h3>

          <div className="wrapper">
            <div className="top">
              <span>Google Maps</span>
              <SwitchButton />
            </div>
            <p className="bottom">Show Google Map on (Posts, Profile, Settings, Ads).</p>
          </div>

          <hr />

          <div className="wrapper input-data">
              <p className='sub-heading'>Google Maps API</p>
              <input type="text" value="AIzaSyBOfpaMO_tMMsuvS2T4zx4llbtsFqMuT9Y"/>
              <p className="bottom">This key is required for GEO and viewing Google Maps.</p>
          </div>

          <div className="wrapper">
            <div className="top">
              <span>Google Translation API</span>
              <SwitchButton />
            </div>
            <p className="bottom">Translate post text.</p>
          </div>

          <hr />

          <div className="wrapper input-data">
              <p className='sub-heading'>Google Translation API Key</p>
              <input type="text" value=""/>
              <p className="bottom">This key is required for post translation.</p>
          </div>

          <hr />

          <div className="wrapper input-data">
              <p className='sub-heading'>Youtube API Key</p>
              <input type="text" value=""/>
              <p className="bottom">This key is required for importing or posting YouTube videos.</p>
          </div>

          <hr />

          <div className="wrapper input-data">
              <p className='sub-heading'>Giphy API</p>
              <input type="text" value="420d477a542b4287b2bf91ac134ae041"/>
              <p className="bottom">This key is required for GIFs in messages, posts and comments.</p>
          </div>

        </div>

      </div>
    </div>
  )
}
