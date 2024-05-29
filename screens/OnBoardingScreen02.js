import React from 'react';
import OnBoardingScreen from '../components/onBoarding';

export default function OnBoardingScreen02() {
    return (
        <OnBoardingScreen 
            imageSource={require('../assets/images/Ellipse154_2.png')}
            title="Choose Best Doctors"
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
            nextScreen="OnBoarding03"
            ellipse153Position={{ top: -55, left: 215 }} // Custom position
        />
    );
}
