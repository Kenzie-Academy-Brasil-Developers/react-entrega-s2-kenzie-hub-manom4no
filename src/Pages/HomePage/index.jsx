import { Box, Button, FormControl, Input, ListItem, UnorderedList, Text, Img, Heading } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const HomePage = () => {
    const [techs,setTechs] = useState([]);

    const searchSchema = yup.object().shape({
        search:yup.string().required("nome da pesquisa obrigatória,facebook/'sua pesquisa'"),
        })
        
    const { register,handleSubmit,formState: { errors }} = useForm({resolver:yupResolver(searchSchema)});

    const handleSearch = (data) => axios .get(`https://api.github.com/repos/${data.search}`).then((response) => setTechs([...techs,response.data])).catch((err) => toast.error("pesquisa invalida"))
    
    return (
        <Box w="100vw" h="100vh" bg="#E9ECEF">
            <Box w="320px" ml="auto" mr="auto" >
                <form onSubmit={handleSubmit(handleSearch)}>
                    <FormControl isInvalid={errors.search} w="300px" d="flex" flexDirection="column" alignItems="center" justifyContent="center" ml="auto" mr="auto">
                        <Box  d="flex" flexDirection="column">
                            <Input placeholder="Digite o nome do repositório" {...register("search")} bg="#ffffff"></Input>
                            <Text color="red">{errors.search?.message}</Text>
                        </Box>
                        <Button type="submit" mt="10px" bg="#868E96">submit</Button>
                    </FormControl>
                </form>
                <UnorderedList listStyleType="none">
                    {techs.map((item,index) => (
                        <ListItem key={index} mt="15px" bg="#ffffff" borderRadius="8px" p="4px">
                            <Box w="54px" h="54px"  bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" borderRadius="50%" d="flex" justifyContent="center" alignItems="center">
                                <Img src={item.owner.avatar_url} alt="item.name" w="50px" h="50px" bg="transparent" borderRadius="50%"/>
                            </Box>
                            <Box>
                                <Heading>{item.name}</Heading>
                                <Text>{item.description}</Text>
                            </Box>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>    
    )
}

export default HomePage;