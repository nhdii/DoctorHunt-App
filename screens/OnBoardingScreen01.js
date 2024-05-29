import React from 'react';
import OnBoardingScreen from '../components/onBoarding';

export default function OnBoardingScreen01() {
    return (
        <OnBoardingScreen 
            imageSource={require('../assets/images/ellipse154.png')}
            title="Find Trusted Doctors"
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
            nextScreen="OnBoarding02"
            ellipse153Position={{ top: -54, left: -64 }} // Custom position
        />
    );
}