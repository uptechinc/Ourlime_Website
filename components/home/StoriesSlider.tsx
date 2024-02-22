'use client'
import Image from "next/image";
import ourlimeImage from '@/public/images/ourlime logo.png'
import car from '@/public/images/home/car.jpg'
import { useEffect, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
export default function Slider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        if (!slider) return;

        const startDragging = (e: MouseEvent | TouchEvent) => {
        isDown = true;
        startX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        scrollLeft = slider.scrollLeft;
        };

        const stopDragging = () => {
        isDown = false;
        };

        const drag = (e: MouseEvent | TouchEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
        const walk = (x - startX);
        slider.scrollLeft = scrollLeft - walk;
        };

        // Mouse events
        slider.addEventListener('mousedown', startDragging);
        slider.addEventListener('mouseleave', stopDragging);
        slider.addEventListener('mouseup', stopDragging);
        slider.addEventListener('mousemove', drag);

        // Touch events
        slider.addEventListener('touchstart', startDragging);
        slider.addEventListener('touchend', stopDragging);
        slider.addEventListener('touchmove', drag);

        return () => {
        if (slider) {
            slider.removeEventListener('mousedown', startDragging);
            slider.removeEventListener('mouseleave', stopDragging);
            slider.removeEventListener('mouseup', stopDragging);
            slider.removeEventListener('mousemove', drag);
            slider.removeEventListener('touchstart', startDragging);
            slider.removeEventListener('touchend', stopDragging);
            slider.removeEventListener('touchmove', drag);
        }
        };
    }, []);
    return (
    <div className="bottom">
        <div className="create-story">
            <AddIcon className="add-icon" />
        </div>

        <div className="stories-container">
            <div className="story">
                        
                        <div className="user">
            
                            <div className="contentImage-wrapper">
                                <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                            </div>
                            
                            <div className="profileImage-wrapper">
                                <Image src = {ourlimeImage} alt = "profile picture" />
                            </div>
            
                        </div>
            
                        <p className="username">John Doe</p>
            </div>
    
            <div className="story">
                
                <div className="user">
    
                    <div className="contentImage-wrapper">
                        <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                    </div>
                    
                    <div className="profileImage-wrapper">
                        <Image src = {ourlimeImage} alt = "profile picture" />
                    </div>
    
                </div>
    
                <p className="username">John Doe</p>
            </div>
    
            <div className="story">
                
                <div className="user">
    
                    <div className="contentImage-wrapper">
                        <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                    </div>
                    
                    <div className="profileImage-wrapper">
                        <Image src = {ourlimeImage} alt = "profile picture" />
                    </div>
    
                </div>
    
                <p className="username">John Doe</p>
            </div>
    
            <div className="story">
                
                <div className="user">
    
                    <div className="contentImage-wrapper">
                        <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                    </div>
                    
                    <div className="profileImage-wrapper">
                        <Image src = {ourlimeImage} alt = "profile picture" />
                    </div>
    
                </div>
    
                <p className="username">John Doe</p>
            </div>
    
            <div className="story">
                
                <div className="user">
    
                    <div className="contentImage-wrapper">
                        <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                    </div>
                    
                    <div className="profileImage-wrapper">
                        <Image src = {ourlimeImage} alt = "profile picture" />
                    </div>
    
                </div>
    
                <p className="username">John Doe</p>
            </div>
    
            <div className="story">
                
                <div className="user">
    
                    <div className="contentImage-wrapper">
                        <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                    </div>
                    
                    <div className="profileImage-wrapper">
                        <Image src = {ourlimeImage} alt = "profile picture" />
                    </div>
    
                </div>
    
                <p className="username">John Doe</p>
            </div>
    
            <div className="story">
                
                <div className="user">
    
                    <div className="contentImage-wrapper">
                        <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                    </div>
                    
                    <div className="profileImage-wrapper">
                        <Image src = {ourlimeImage} alt = "profile picture" />
                    </div>
    
                </div>
    
                <p className="username">John Doe</p>
            </div>
    
            <div className="story">
                
                <div className="user">
    
                    <div className="contentImage-wrapper">
                        <Image src = {car} alt = "story thumbnail" placeholder="blur"/>
                    </div>
                    
                    <div className="profileImage-wrapper">
                        <Image src = {ourlimeImage} alt = "profile picture" />
                    </div>
    
                </div>
    
                <p className="username">John Doe</p>
            </div>
        </div>

    </div>
    )
}
