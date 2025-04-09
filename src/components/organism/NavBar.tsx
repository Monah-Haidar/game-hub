import logo from '../../assets/logo.webp'
import {HStack, Image} from "@chakra-ui/react";
import ColorModeSwitch from "./../ColorModeSwitch.tsx";
import SearchInput from "../atoms/SearchInput.tsx";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
    return (
        <div>
            <HStack padding='10px'>
                <Image src={logo} boxSize="60px"/>
                <SearchInput onSearch={onSearch}/>
                <ColorModeSwitch/>
            </HStack>
        </div>
    );
};

export default NavBar;