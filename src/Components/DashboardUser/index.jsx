import { Box, Heading, Text } from "@chakra-ui/react";

const DashBoardUser = ({user}) => {
    return (
        <Box
        w={["320px","70vw"]}
        h="118px"
        bg="#121214"
        d="flex"
        flexDir={["column","row"]}
        justifyContent={["space-evenly","space-between"]}
        alignItems={["start","center"]}>
            <Heading variant="title1">
                {user.bio}
            </Heading>
            <Text variant="headLineBold">
                {user.course_module}
            </Text>
        </Box>
    )
}

export default DashBoardUser;