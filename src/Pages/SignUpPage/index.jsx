import { Box, Button, Img } from "@chakra-ui/react";
import SignUpForm from "../../Components/SignUpForm";
import logo from "../../Assets/Images/Logo.svg"
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
    const history = useHistory();

    return (
        <Box bg="#000000" w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center" >
            <Box mt="10px" mb="2px" d="flex" flexDir="row" w={['296px','370px']} justifyContent="space-between">
                <Img src={logo} alt="" w={["101px","144.06px"]}/> 
                <Button 
                variant="utility"
                w={["79.54px","67.49px"]}
                h={["25.58px","32px"]}
                fontSize={["9.59px","12px"]}
                onClick={()=>history.push("/")}>Voltar</Button>
            </Box>
            <SignUpForm />
        </Box>
    )
}

export default SignUpPage;