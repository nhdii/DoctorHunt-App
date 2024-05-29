import React from 'react';
import OnBoardingScreen from '../components/onBoarding';

export default function OnBoardingScreen03() {
    return (
        <OnBoardingScreen 
            imageSource={require('../assets/images/Ellipse154_3.png')}
            title="Easy Appointments"
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
            nextScreen="Login"
            ellipse153Position={{ top: -54, left: -64 }} // Custom position
        />
    );
}