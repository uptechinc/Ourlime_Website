import SwitchButton from "../SwitchButton";

export default function AI() {
    return (
      <div className="ai-settings main-layout">
        <div className="left">
          <div className="other-config button-layout">
            <h3>Open AI Settings</h3>

            <div className="wrapper input-data">
                <p className='sub-heading'>OpenAI API Key</p>
                <input type="text" placeholder="Application ID"/>
            </div>

            <hr />

            <div className="wrapper input-data">
                <p className='sub-heading'>OpenAI text model</p>
                <select name="" id="">
                  <option value="">gpt-3.5-turbo</option>
                  <option value="">gpt-4</option>
                </select>
            </div>

          
          </div>

          <div className="other-config button-layout">
            <h3>AI Settings</h3>

            <div className="wrapper">
              <div className="top">
                <span>AI Images System</span>
                <SwitchButton />
              </div>
              <p className="bottom">Allow AI to generate images.</p>
            </div>

            <hr />
            <div className="wrapper">
              <div className="top">
                <span>AI Posts System</span>
                <SwitchButton />
              </div>
              <p className="bottom">Allow AI to generate posts.</p>
            </div>
          
          </div>
        </div>

      </div>
    )
  }
  