import { Box, Button, Heading, Input, Select, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "../../Styles/style.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import api from "../../Services/Api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
    const history = useHistory();
    const LoginSchema = yup.object().shape({
        name:yup.string().required("Campo de nome obrigatório"),
        email:yup.string().email("Email invalido").required("Campo de email obrigatório"),
        password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Mín 8 dig./ maiúscula/ minúscula/ Número/ Caracter especial").required("Campo de senha obrigatório"),
        confirm_password:yup.string().oneOf([yup.ref("password")], "senha divergente").required("confirmação de senha obrigatória"),
        contact:yup.string().required("Campo do linkedin obrigatório"),
        course_module:yup.string().required("Campo de módulo obrigatório"),
    })
    const { register,handleSubmit,formState: { errors }} = useForm({
        resolver:yupResolver(LoginSchema)
    });
    const moduleMod = (obj) =>{
        if(obj.course_module === "Primeiro módulo"){
            return obj.course_module = "Primeiro módulo (front-end básico)"
        }
        else if(obj.course_module === "Segundo módulo"){
            return obj.course_module = "Segundo módulo (front-end intermediário)"
        }
        else if(obj.course_module === "Terceiro módulo"){
            return obj.course_module = "Terceiro módulo (front-end avançado)"
        }
        else if(obj.course_module === "Quarto módulo"){
            return obj.course_module = "Quarto módulo (Back-end básico)"
        }
        else if(obj.course_module === "Quinto módulo"){
            return obj.course_module = "Quinto módulo (Back-end intermediário)"
        }else{
            return obj.course_module = "Sexto módulo (Back-end avançado)"
        }
    }
    const handleSignIn = async (data) => {
        delete data.confirm_password;
        const changeModule = moduleMod(data);
        const formattedData  = {...data,bio:`Seja bem-vindo à kenzie Hub ${data.name}`,techs:[]};
        const response = await api.post("/users",formattedData)
        .then((response)=> {
            toast.success("cadastro efetuado com sucesso")
            history.push("/")
        })
        .catch((err) => {
            toast.error("erro no seu cadastro,tente novamente")
        })
    }
    return (
        <Box
        w={['296px','370px']}
        h={['568.47px','645px']}
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
            lineHeight= {["22.46px","28px"]}>Crie sua Conta</Heading>
            <Text 
            variant="headLineBold" 
            textAlign="center" 
            fontStyle="normal"
            fontSize={["10px","12px"]}
            lineHeight={["17.59px"]}>Rápido e grátis, vamos nessa</Text>
            <form onSubmit={handleSubmit(handleSignIn)}>
                {/* ===========================================================================================================*/}
                <Box name="name" >
                    <Text 
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}>Nome</Text>
                    <Input 
                    {...register("name")}
                    placeholder="Digite aqui seu name"
                    bg= "#343b41"
                    h= {["38.38","48px"]}
                    w= "264.66px"
                    bg= {errors.name?"#e83f5b":"#343b41"}
                    color= {errors.name?"#212529":"#868E96"}
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px 16.2426px"
                    border= "none"
                    borderRadius= "4px"
                    marginTop= {["3px","10px"]}
                    _focus= {{
                        border: "1.2182px solid #F8F9FA",
                        color: "#ffffff",
                        }
                    }/>
                </Box>
                {/* ===========================================================================================================*/}
                <Box name="email" >
                    <Text 
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}>Email</Text>
                    <Input 
                    {...register("email")}
                    placeholder="Digite aqui seu email"
                    bg= "#343b41"
                    h= {["38.38","48px"]}
                    w= "264.66px"
                    bg= {errors.email?"#e83f5b":"#343b41"}
                    color= {errors.email?"#212529":"#868E96"}
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px 16.2426px"
                    border= "none"
                    borderRadius= "4px"
                    marginTop= {["3px","10px"]}
                    _focus= {{
                        border: "1.2182px solid #F8F9FA",
                        color: "#ffffff",
                        }
                    }/>
                </Box>
                {/* ===========================================================================================================*/}
                <Box name="password" w= "264.66px">
                    <Text 
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}>Senha</Text>
                    <Input 
                    {...register("password")}
                    type="password"
                    placeholder="Digite aqui sua senha"
                    bg= {errors.email?"#e83f5b":"#343b41"}
                    color= {errors.email?"#212529":"#868E96"}
                    h= {["38.38","48px"]}
                    w= "264.66px"
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px 16.2426px"
                    border= "none"
                    borderRadius= "4px"
                    marginTop= {["3px","10px"]}
                    _focus= {{
                        border: "1.2182px solid #F8F9FA",
                        color: "#ffffff",
                        }
                    }/>
                </Box>
                {/* ===========================================================================================================*/}
                <Box name="confirm_password">
                    <Text 
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}>Confirme sua senha</Text>
                    <Input 
                    {...register("confirm_password")}
                    type="password"
                    placeholder="Confirme sua senha"
                    bg= {errors.email?"#e83f5b":"#343b41"}
                    color= {errors.email?"#212529":"#868E96"}
                    h= {["38.38","48px"]}
                    w= "264.66px"
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px 16.2426px"
                    border= "none"
                    borderRadius= "4px"
                    marginTop= {["3px","10px"]}
                    _focus= {{
                        border: "1.2182px solid #F8F9FA",
                        color: "#ffffff",
                        }
                    }/>
                </Box>
                {/* ===========================================================================================================*/}
                <Box name="contact">
                    <Text
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}><AiOutlineLinkedin /></Text>
                    <Input 
                    {...register("contact")}
                    placeholder="LinkedIn"
                    bg= {errors.email?"#e83f5b":"#343b41"}
                    color= {errors.email?"#212529":"#868E96"}
                    h= {["38.38","48px"]}
                    w= "264.66px"
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px 16.2426px"
                    border= "none"
                    borderRadius= "4px"
                    marginTop= {["3px","10px"]}
                    _focus= {{
                        border: "1.2182px solid #F8F9FA",
                        color: "#ffffff",
                        }
                    }/>
                </Box>
                {/* ===========================================================================================================*/}
                <Box name="module">
                    <Text 
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}>Selecionar módulo</Text>
                    <Select 
                    {...register("course_module")}
                    bg= "#343b41"
                    color= "#868E96"
                    h= {["38.38","48px"]}
                    w= "264.66px"
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px 16.2426px"
                    border= "none"
                    borderRadius= "4px"
                    marginTop= {["3px","10px"]}
                    padding= "0px"
                    _focus= {{
                        border: "1.2182px solid #F8F9FA",
                        color: "#ffffff",
                        }
                    }>
                        <option>Primeiro módulo</option>
                        <option>Segundo módulo</option>
                        <option>Terceiro módulo</option>
                        <option>Quarto módulo</option>
                        <option>Quinto módulo</option>
                        <option>Sexto módulo</option>
                    </Select>
                </Box>
                {/* ===========================================================================================================*/}
                <Button type="submit" variant="primary" w="264.66px" marginTop= "30px">Entrar</Button>
            </form>
        </Box>
    )
}

export default SignUpForm;