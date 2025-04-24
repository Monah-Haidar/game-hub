import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef, FormEvent} from "react";
import useGameQueryStore from "../../stores/store";



const SearchInput = () => {

    const setSearchText = useGameQueryStore(s => s.setSearchText);

    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant='filled'/>
            </InputGroup>
        </form>

    );
};

export default SearchInput;