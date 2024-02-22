import Image from "next/image";
import CommunitiesSlider from "./CommunitiesSlider";
import StoriesSlider from "./StoriesSlider";
import mailIcon from '@/public/images/home/mail icon.png'
import RefreshIcon from '@mui/icons-material/Refresh';
export default function RightSection() {
    
    return (
    <section className="right-section">

        <div className="stories">

            <div className="top">
                <h3>Stories</h3>
                <p>View All</p>
            </div>

            <StoriesSlider />

        </div>

        <div className="suggested-communities">
            <div className="top">
                <h3>Suggested Communities</h3>
                <RefreshIcon />
            </div>

            <CommunitiesSlider />
        </div>

        <div className="invite-friends">
                <Image src = {mailIcon} alt = "invite friends" />
                <h3>Invite Friends</h3>
                <form>
                    <input type="text" name="email" placeholder="Email" />
                </form>
        </div>

    </section>
    )
}
