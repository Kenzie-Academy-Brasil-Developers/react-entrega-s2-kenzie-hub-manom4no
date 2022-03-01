import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Redirect, useHistory } from "react-router-dom";
import api from "../../Services/Api";
import { toast } from "react-toastify";

const LoginForm = ({authentication,setAuthentication}) => {
    const history = useHistory();
    const LoginSchema = yup.object().shape({
        email:yup.string().email("Email invalido").required("email obrigatório"),
        password:yup.string().required("Campo de senha obrigatório"),
    })
    const { register,handleSubmit,formState: { errors }} = useForm({
        resolver:yupResolver(LoginSchema)
    });
    const handleLogin = async(data) => {
        const response = await api.post("/sessions",data)
        .then((response) => {
            const { token,user } = response.data;
            localStorage.clear();
            localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
            localStorage.setItem("@kenzieHub:user", JSON.stringify(user));
            setAuthentication(true);
            toast.success("Logado");
        })
      .catch((err) => {
        toast.error("Email e/ou senha inválidos!");
      });
    };
    if(authentication){
        return <Redirect to="/dashboard"/>
    }
    return (
        <Box
        w={['296px','369px']}
        h={['402.69px','502px']}
        bg="#212529"
        borderRadius={['3.21px','4px']}
        padding={['34px, 18px, 34px, 18px','42px, 22px, 42px, 22px']}
        d="flex"
        flexDir="column"
        alignItems="center"
        boxShadow={['0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25)',
                    '0px 4px 40px -10px rgba(0, 0, 0, 0.25)']}>
            <Heading 
            color="#f8f9fa"
            fontFamily= "inter,sans-serif"
            fontStyle= "normal"
            fontWeight= "700"
            fontSize= {["14.44px","18px"]}
            lineHeight= {["22.46px","28px"]}
            marginTop= {["10px","35px"]}>Login</Heading>
            <form onSubmit={handleSubmit(handleLogin)}>
                <Text 
                variant="headLineItalic" 
                color="#f8f9fa"
                fontStyle="normal"
                marginTop= "15px">Email</Text>
                <Input 
                {...register("email")}
                placeholder="Digite aqui seu email"
                bg= "#343b41"
                h= "48px"
                w= "264.66px"
                flexDir= "row"
                alignItems= "center"
                padding= "0px 16.2426px"
                border= "none"
                borderRadius= "4px"
                marginTop= "10px"
                _focus= {{
                    border: "1.2182px solid #F8F9FA",
                    color: "#ffffff",
                    }
                }/>
                <Text variant="headLineItalic">{errors.email?.message}</Text>
                <Text 
                variant="headLineItalic" 
                color="#f8f9fa"
                fontStyle="normal"
                marginTop= "10px">Senha</Text>
                <Input 
                {...register("password")}
                type="password"
                placeholder="Digite aqui sua senha"
                bg= "#343b41"
                h= "48px"
                w= "264.66px"
                flexDir= "row"
                alignItems= "center"
                padding= "0px 16.2426px"
                border= "none"
                borderRadius= "4px"
                marginTop= "10px"
                _focus= {{
                    border: "1.2182px solid #F8F9FA",
                    color: "#ffffff",
                    }
                }/>
                <Text variant="headLineItalic">{errors.password?.message}</Text>
                <Button type="submit" variant="primary" w="264.66px" marginTop= "30px">Entrar</Button>
                <Text variant="headLineBold" textAlign="center" marginTop= {["20px","40px"]}>Ainda não possui uma conta?</Text>
                <Button variant="primary" w="264.66px" bg="#868E96"marginTop= "20px" onClick={()=>history.push("/cadastro")} >Cadastre-se</Button>
            </form>
        </Box>
    )
}

export default LoginForm;