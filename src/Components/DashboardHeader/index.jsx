import { Box, Button, Img } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.svg"

const DashBoardHeader = ({setAuthentication}) => {
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        setAuthentication(false);
      };
    return (
        <Box
        w={["320px","70vw"]}
        h="72px"
        bg="#121214"
        d="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center">
            <Img 
            src={Logo}
            w="105.53px"
            />
            <Button
            variant="utility"
            w="55.49px"
            h="32px"
            onClick={logout}>Sair
            </Button>
        </Box>
    )
}

export default DashBoardHeader;