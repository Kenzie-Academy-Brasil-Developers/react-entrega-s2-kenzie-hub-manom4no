import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Redirect} from "react-router-dom";
import { toast } from "react-toastify";
import DashBoardHeader from "../../Components/DashboardHeader"
import DashboardList from "../../Components/DashboardList";
import DashBoardUser from "../../Components/DashboardUser";
import api from "../../Services/Api";

const Dashboard =  ({authentication,setAuthentication}) => {
    const [ techs,setTechs ] = useState([]);
    const [ token ] = useState(JSON.parse(localStorage.getItem("@kenzieHub:token")) || "");
    const [ user ] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")) || "");

    const loadTechs = () => {
        api.get(`/users/${user.id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => setTechs(response.data.techs))
        .catch((err) => toast.error("falha na requisição"))
    }
    useEffect(() => {
        loadTechs();
    }, []);
    if(!authentication){
        return <Redirect to="/"/>
    };

    return (
        <Box 
        h="100vh"
        d="flex" 
        flexDir="column" 
        alignItems="center" 
        justifyContent="center" 
        bg="#121214">
            <Box borderBottom="1px solid #868E96">
                <DashBoardHeader setAuthentication={setAuthentication}/>
            </Box>
            <Box borderBottom="1px solid #868E96">
                <DashBoardUser user={user}/>
            </Box>
            <Box>
                <DashboardList loadTechs={loadTechs} token={token} techs={techs}/>
            </Box>
        </Box>
    )
}

export default Dashboard;