import { Box, Flex,Text} from "@chakra-ui/react";
import React from "react";
import { statTracker } from "../utils/statTracker";
import { ResultsStats } from "./ResultsStats";
import { TotalStats } from "./TotalStats";
import styles from "./ResultStats.module.css"

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
                contents = (<Text color="white" fontSize="3xl"> Coming Soon! </Text>)
                break;

        }
        
        return (
            <Box border="2px solid purple" height="100%" width="100%" position="fixed">
                <Box className={styles.grid} borderRadius="10px" border="8px solid purple" background="blackAlpha.900" margin="auto" width="90%" height="90%" position="absolute" top="50%" left="50%" transform="translate(-50%,-52%)"  >
                    {contents}
                </Box>
            </Box>
        )
    }
    else{
        return null;
    }
}