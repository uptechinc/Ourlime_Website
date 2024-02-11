import Image from "next/image";
import gamingPicture from '@/public/images/gaming.jpg';
import computerPicture from '@/public/images/computer.webp'
import handsPicture from '@/public/images/hands.webp'
import peoplePicture from '@/public/images/people.jpg'
export default function CommunitiesSlider() {
    return (
        <div className="bottom">
            <div className="contentImage-wrapper">
                <Image 
                    src = {gamingPicture}
                    alt = "community thumbnail" 
                    quality={100}
                    width={100}
                    height={100}
                    placeholder="blur"/>
            </div>

            <div className="contentImage-wrapper">
                <Image 
                    src = {computerPicture}
                    alt = "community thumbnail" 
                    quality={100}
                    width={100}
                    height={100}
                    placeholder="blur"/>
            </div>

            <div className="contentImage-wrapper">
                <Image 
                    src = {handsPicture} 
                    alt = "community thumbnail" 
                    quality={100}
                    width={100}
                    height={100}
                    placeholder="blur"/>
            </div>

            <div className="contentImage-wrapper">
                <Image 
                    src = {peoplePicture}
                    alt = "community thumbnail" 
                    quality={100}
                    width={100}
                    height={100}
                    placeholder="blur"/>
            </div>
        
        </div>
    )
}
