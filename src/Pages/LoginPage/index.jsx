import { Box, Img } from "@chakra-ui/react";
import LoginForm from "../../Components/LoginForm";
import logo from "../../Assets/Images/Logo.svg"

const LoginPage = ({authentication,setAuthentication}) => {

    return (
        <Box bg="#000000" w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center" >
            <Img src={logo} alt="" mt="40px" mb="20px" w={["101px","144.06px"]}/>
            <LoginForm authentication={authentication} setAuthentication={setAuthentication}/>
        </Box>
    )
}

export default LoginPage;