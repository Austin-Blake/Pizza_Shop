import React,{useState} from 'react';
import {Navbar} from '../Navbar/index';
import { Sidebar } from '../Sidebar';
import {HeroContainer, HeroContent ,HeroH1, HeroItems, HeroP, HeroBtn} from './HeroElements'

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toggle={ toggle}/>
            <Sidebar isOpen={isOpen} toggle={ toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
