import { Box,Button,Heading,Text,Input,Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,useDisclosure,UnorderedList, Select} from "@chakra-ui/react"
import addbtn from "../../Assets/Images/ButtonPlus.svg"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from "../../Services/Api";
import { toast } from "react-toastify";
import DashboardCard from "../DashboardCard";

const DashboardList = ({ loadTechs,token,techs }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const techSchema =  yup.object().shape({
    title:yup.string().required("Campo de nome obrigatório"),
    status:yup.string().required("Campo de nome obrigatório"),
  });
  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(techSchema),
  });
  const handleTech = (data) => {
    api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => loadTechs())
      .catch((err) => toast.error("erro na requisição"));
      onClose()
  };
    return (
      <Box 
      bg="#121214"
      d="flex"
      flexDir="column">
        <Box
        w={["320px","70vw"]}
        h="72px"
        d="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center">
          <Heading variant="title2">Tecnologias</Heading>
          <Button 
          className="addBtn"
          variant="utility"
          h="30px"
          w="30px"
          bg="#212529"
          bgImg={addbtn}
          bgPos="center"
          bgRepeat="no-repeat"
          onClick={onOpen}>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent 
            bg="#212529"
            w={["296px","369px"]}
            h={["274.34px","342"]}
            p={["55px, 18px, 26px, 18px","68px, 22px, 32px, 22px"]}
            borderRadius={["3.21px","4px"]}>
              <ModalHeader
              h={["40.11px","50px"]}
              w="100%"
              bg="#343B41"
              d="flex"
              alignItems="center">
                <Heading 
                variant="title3"
                fontSize={["11.23px","14px"]}
                lineHeight={["19.25px","24px"]}>Cadastrar tecnologia</Heading>
              </ModalHeader>
              <ModalCloseButton color="#868E96"/>
              <ModalBody>
                <form onSubmit={handleSubmit(handleTech)}>
                  <Box name="title">
                    <Text 
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}>Nome</Text>
                    <Input 
                    {...register("title")}
                    placeholder="Digite aqui sua tecnologia"
                    bg= "#343b41"
                    h= {["38.38","48px"]}
                    w= "100%"
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px 16.2426px"
                    border= "none"
                    borderRadius= "4px"
                    marginTop= {["0px","10px"]}
                    _focus= {{
                      border: "1.2182px solid #F8F9FA",
                      color: "#ffffff",
                      }
                    }/>
                    <Text variant="headLineItalic">{errors.title?.message}</Text>
                  </Box>
                  <Box name="status">
                    <Text 
                    variant="headLineItalic" 
                    color="#f8f9fa"
                    fontStyle="normal"
                    marginTop= {["2px","8px"]}>Selecionar status</Text>
                    <Select 
                    {...register("status")}
                    bg= "#343b41"
                    h= {["38.38","48px"]}
                    w= "100%"
                    flexDir= "row"
                    alignItems= "center"
                    padding= "0px"
                    border= "none"
                    borderRadius= "4px"
                    margin="0px"
                    marginTop= {["0px","10px"]}
                    _focus= {{
                      border: "1.2182px solid #F8F9FA",
                      color: "#ffffff",
                      }
                    }>
                      <option>Básico</option>
                      <option>Intermediário</option>
                      <option>Avançado</option>
                    </Select>
                    <Text variant="headLineItalic">{errors.status?.message}</Text>
                    <Button type="submit" variant='primary' w="100%" mt="20px">cadastrar tecnologia</Button>
                  </Box>
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <UnorderedList
        margin="0px"
        padding="0px"
        w={["320px","70vw"]}
        h={["300px","350px"]}
        bg="#212529"
        borderRadius="4px"
        d="flex"
        flexDir="column"
        alignItems="center"
        overflowY="scroll">
          {DashboardCard(techs,token,loadTechs)}
        </UnorderedList>
      </Box>
    )
}

export default DashboardList;