import { Button,Heading,Text,Box, ListItem} from "@chakra-ui/react"
import { toast } from "react-toastify";
import api from "../../Services/Api";
import "../../Styles/style.css";

const DashboardCard = (arr,token,loadTechs) => {
    const removeTech = (id) => {
        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((_) => {
            loadTechs();
        })
        .catch((_) => toast.error("falha na requisição"));
      };
    return (
        <>
        {arr.map((item) => (
            <>
                <ListItem 
                key={item.id}
                w="95%"
                h="48.73px"
                bg="#343B41"
                d="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius={"3.21px","4px"}
                mt="10px"
                _hover={{bg:"#343B41"}}>  
                    <Heading ml="10px" variant="title3">{item.title}</Heading>
                    <Box d="flex" flexDir="row" alignItems="center">
                        <Text mr="10px" variant="headline">{item.status}</Text>
                        <Button className="deleteBtn" d="flex" w="10px"onClick={()=> removeTech(item.id)}>x</Button>
                    </Box>
                </ListItem>
            </>
        ))}
        </>    
    )
}

export default DashboardCard;