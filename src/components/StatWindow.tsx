import { Box, Flex,Text} from "@chakra-ui/react";
import React from "react";
import { statTracker } from "../utils/statTracker";
import { ResultsStats } from "./ResultsStats";
import { TotalStats } from "./TotalStats";
import styles from "./ResultStats.module.css"
import { FriendsList } from "./FriendsList";

interface StatWindowProps {
    tab: number,
    visible: boolean,
    stats: statTracker
}

export const StatWindow: React.FC<StatWindowProps> = ({tab,visible,stats}) => {
    
    if(visible){
        let contents = null
        switch(tab){
            case 0:
                contents = (<ResultsStats recent={stats.mostRecent.stats} stats={stats} visible={visible}/>)
                break;
            case 1: 
                contents = (<Text color="white" fontSize="3xl"> Coming Soon! </Text>)
                break;
            case 2:
                contents = (<FriendsList/>)
                break;

        }
        
        return (
            <Box border="2px solid purple" height="100%" width="100%" position="fixed">
                {contents}
            </Box>
        )
    }
    else{
        return null;
    }
}