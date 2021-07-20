import { Box } from "@chakra-ui/react"
import React from "react"
import { useGetFriendRequestsQuery, useInvitationsQuery, useMeQuery } from "../generated/graphql"
import styles from './FriendsList.module.css'
import { UserPlaque } from "./userPlaque"

export const FriendsList: React.FC = () => {

    const [{data,fetching}] = useGetFriendRequestsQuery();
    const [result] = useInvitationsQuery();
    const [me] = useMeQuery();
    let friendsList = null;
    let invitations = null;
    let recentPlayers = null;
    if(fetching || result.fetching || me.fetching){

    }
    else{

        const friends = data.getFriendRequests.map(request => {
            if(request.requestee == me.data.me.username){
                return request.requester
            }
            return request.requestee
        });
        friendsList = 


        invitations = 
        recentPlayers = "s"
            
        

    }
    return (
        <Box className={styles.grid} borderRadius="10px" border="8px solid purple" background="blackAlpha.900" margin="auto" width="90%" height="90%" position="absolute" top="50%" left="50%" transform="translate(-50%,-52%)"  >
            <Box className={styles.friends}>
                {friendsList}
            </Box>
            <Box className={styles.invitations}>
                {invitations}
            </Box>
            <Box className={styles.recentPlayers}>
                {recentPlayers}
            </Box>
            
        </Box>    
    )

}
    
