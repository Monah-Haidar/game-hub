import logo from '../assets/logo.webp'
import {HStack, Image} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const NavBar = () => {
    return (
        <div>
            <HStack justifyContent='space-between' padding='10px'>
                <Image src={logo} boxSize="60px"/>
                <ColorModeSwitch/>
            </HStack>
        </div>
    );
};

export default NavBar;