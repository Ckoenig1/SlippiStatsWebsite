import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { User } from "../generated/graphql";

interface userPlaqueProps{
    user: User
}


export const UserPlaque: React.FC<userPlaqueProps> = ({user}) => {
    return (
        <Flex>    
            <Box>
                {user.username}
            </Box>
            <Box>
                {user.online}
            </Box>
            <Button>
                Invite To Game
            </Button>
        </Flex> 
    )         
}