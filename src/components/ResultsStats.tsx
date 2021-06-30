
import { Box, Flex ,Text} from '@chakra-ui/react';
import React from 'react'
import { gameStat } from '../utils/gameStat';
import { statTracker } from '../utils/statTracker';
import styles from './ResultStats.module.css'

interface TotalStatsProps {
    recent: statTracker["mostRecent"]["stats"]
    stats: statTracker,
    visible: boolean
}

export const ResultsStats: React.FC<TotalStatsProps> = ({stats,recent,visible}) => {
        
    if(!visible){
        return null;
    }
    let winnerPlaque = null
    let yourStats = null
    if(recent.wins > 0){
        winnerPlaque = (
            <Flex className={styles.header} justify="center" alignItems="center">
                <Text className={styles.text} >
                    {stats.total.userCode}
                </Text>
                <Flex alignItems="center" direction="column" padding="1vw"> 
                    <img className={styles.img} src={"../assets/stock-icon-"+(stats.mostRecent.characterID || 0)+".png"} />
                    <Text className={styles.text} color="green">
                     Won
                    </Text>
                </Flex>
                <Text fontSize="3xl" className={styles.text} color="orange" padding="2vw"> 
                    VS
                </Text>
                <Flex alignItems="center" direction="column" padding="1vw"> 
                    <img className={styles.img} src={"../assets/stock-icon-"+(stats.mostRecent.opponentCharID || 0)+".png"} alt="aaaah" />
                    <Text className={styles.text} color="red">
                        Lost
                    </Text>
                </Flex>
                <Text className={styles.text}>
                {stats.mostRecent.opponent}
                </Text>
               
            </Flex>
        )
    }
    else{
        winnerPlaque = (
            <Flex className={styles.header} justify="center" alignItems="center">
                <Text className={styles.text} >
                    {stats.total.userCode}
                </Text>
                <Flex alignItems="center" direction="column" padding="1vw"> 
                    <img src={"../assets/stock-icon-"+(stats.mostRecent.characterID || 0)+".png"} />
                    <Text className={styles.text} color="green" fontWeight="bold">
                     Won
                    </Text>
                </Flex>
                <Text fontSize="3xl" className={styles.text} color="orange" padding="2vw"> 
                    VS
                </Text>
                <Flex alignItems="center" direction="column" padding="1vw"> 
                    <img src={"../assets/stock-icon-"+(stats.mostRecent.opponentCharID || 0)+".png"} alt="aaaah" />
                    <Text className={styles.text} color="red" fontWeight="bold">
                        Lost
                    </Text>
                </Flex>
                <Text className={styles.text}>
                {stats.mostRecent.opponent}
                </Text>
               
            </Flex>
        )
    }


    yourStats = (
        <Flex className={styles.yourStats} justify={"space-between"} direction="column" >
            <Flex justify="center" borderBottom="2px solid black" color={"rgb(21, 221, 188)"}>
                <Text>Your Stats</Text>
            </Flex>
            <Flex justify={"space-between"}>
                <Box color="white">
                    Kills:
                </Box>
                <Box color="white">
                 {recent.kills}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Deaths:
                </Box>
                <Box>
                 {recent.deaths}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Self Destructs: 
                </Box>
                <Box>
                 {recent.selfDestructs}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    APM:
                </Box>
                <Box>
                 {recent.apm.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                   Openings / Kill:
                </Box>
                <Box>
                 {recent.openingsPerKill.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Avg Kill % :
                </Box>
                <Box>
                 {recent.avgKillPercent.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    L-Cancel ✅ / ❌: 
                </Box>
                <Box>
                 {recent.actions.lCancelCount.success + " / " + recent.actions.lCancelCount.fail}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Rolls:
                </Box>
                <Box>
                 {recent.actions.rollCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Wavedashes:
                </Box>
                <Box>
                 {recent.actions.wavedashCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Wavelands:
                </Box>
                <Box>
                 {recent.actions.wavelandCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Dash-dances:
                </Box>
                <Box>
                 {recent.actions.dashDanceCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Ledge Grabs:
                </Box>
                <Box>
                 {recent.actions.ledgegrabCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Grabs ✅ / ❌:
                </Box>
                <Box>
                 {recent.actions.grabCount.success+ " / " + recent.actions.grabCount.fail  }
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Wall Techs ✅ / ❌:
                </Box>
                <Box>
                 {recent.actions.wallTechCount.success +" / " + recent.actions.wallTechCount.fail}
                </Box>
            </Flex>
            <Flex className={styles.statHeader}>
                <Text>
                    Ground Techs
                </Text>
                <Flex className={styles.statRow}>
                    <Box>
                        Forward:
                    </Box>
                    <Box>
                    {recent.actions.groundTechCount.forward}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Neutral:
                    </Box>
                    <Box>
                    {recent.actions.groundTechCount.neutral}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Backward:
                    </Box>
                    <Box>
                    {recent.actions.groundTechCount.backward}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Missed:
                    </Box>
                    <Box>
                    {recent.actions.groundTechCount.fail}
                    </Box>
                </Flex>
                
            </Flex>
            <Flex className={styles.statHeader}>
                <Text>
                    Throws
                </Text>
                <Flex className={styles.statRow}>
                    <Box>
                        Up:
                    </Box>
                    <Box>
                    {recent.actions.throwCount.up}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Forward:
                    </Box>
                    <Box>
                    {recent.actions.throwCount.forward}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Down:
                    </Box>
                    <Box>
                    {recent.actions.throwCount.down}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Back:
                    </Box>
                    <Box>
                    {recent.actions.throwCount.back}
                    </Box>
                </Flex>
                
            </Flex>
            
        </Flex>
    )


    let theirStats = (
        <Flex className={styles.theirStats} justify={"space-between"} direction="column" >
            <Flex justify="center" borderBottom="2px solid black" color={"rgb(21, 221, 188)"}>
                <Text>Opponent Stats</Text>
            </Flex>
            <Flex justify={"space-between"}>
                <Box color="white">
                    Kills:
                </Box>
                <Box color="white">
                 {stats.mostRecent.opStats.kills}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Deaths:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.deaths}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Self Destructs: 
                </Box>
                <Box>
                 {stats.mostRecent.opStats.selfDestructs}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    APM:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.apm.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                   Openings / Kill:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.openingsPerKill.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Avg Kill % :
                </Box>
                <Box>
                 {stats.mostRecent.opStats.avgKillPercent.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    L-Cancel ✅ / ❌: 
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.lCancelCount.success + " / " + stats.mostRecent.opStats.actions.lCancelCount.fail}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Rolls:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.rollCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Wavedashes:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.wavedashCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Wavelands:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.wavelandCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Dash-dances:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.dashDanceCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Ledge Grabs:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.ledgegrabCount}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Grabs ✅ / ❌:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.grabCount.success+ " / " + stats.mostRecent.opStats.actions.grabCount.fail  }
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Wall Techs ✅ / ❌:
                </Box>
                <Box>
                 {stats.mostRecent.opStats.actions.wallTechCount.success +" / " + stats.mostRecent.opStats.actions.wallTechCount.fail}
                </Box>
            </Flex>
            <Flex className={styles.statHeader}>
                <Text>
                    Ground Techs
                </Text>
                <Flex className={styles.statRow}>
                    <Box>
                        Forward:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.groundTechCount.forward}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Neutral:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.groundTechCount.neutral}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Backward:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.groundTechCount.backward}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Missed:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.groundTechCount.fail}
                    </Box>
                </Flex>
                
            </Flex>
            <Flex className={styles.statHeader}>
                <Text>
                    Throws
                </Text>
                <Flex className={styles.statRow}>
                    <Box>
                        Up:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.throwCount.up}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Forward:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.throwCount.forward}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Down:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.throwCount.down}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        Back:
                    </Box>
                    <Box>
                    {stats.mostRecent.opStats.actions.throwCount.back}
                    </Box>
                </Flex>
                
            </Flex>
            
        </Flex>
    )

    let globalStats = (
        <Flex className={styles.globalStats} justify={"space-between"} direction="column">
            <Flex justify="center" borderBottom="2px solid black" color={"rgb(21, 221, 188)"}>
                <Text>Global Stats</Text>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Time Played:
                </Box>
                <Box>
                 {(stats.total.stats.timePlayed/(60*60)).toFixed(2)+" hrs"}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Wins:
                </Box>
                <Box>
                 {stats.total.stats.wins}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Losses:
                </Box>
                <Box>
                 {stats.total.stats.losses}
                </Box>
            </Flex>
            
            <Flex justify={"space-between"}>
                <Box>
                    K / D:
                </Box>
                <Box>
                 {stats.total.stats.killDeath.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    Avg SDs:
                </Box>
                <Box>
                 {stats.total.stats.averageSDs.toFixed(2)}
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box>
                    4 Stocks:
                </Box>
                <Box>
                 {stats.total.stats.fourStocks}
                </Box>
            </Flex>
            <Flex className={styles.statHeader}>
                <Text>
                    Comebacks
                </Text>
                <Flex className={styles.statRow}>
                    <Box>
                        2 Stock:
                    </Box>
                    <Box>
                    {stats.total.stats.comeBack2}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        3 Stock:
                    </Box>
                    <Box>
                    {stats.total.stats.comeBack3}
                    </Box>
                </Flex>
                <Flex className={styles.statRow}>
                    <Box>
                        4 Stock:
                    </Box>
                    <Box>
                    {stats.total.stats.comeBack4}
                    </Box>
                </Flex>
                
                
            </Flex>
            
        </Flex>
    )

    let extras = (
        <Flex className={styles.extraStats} justify={"space-evenly"} direction="column" >
            <Flex className={styles.extra}>
                    <Text>
                        Ground Techs
                    </Text>
                    <Flex className={styles.statRow}>
                        <Box>
                            Forward:
                        </Box>
                        <Box>
                        {recent.actions.groundTechCount.forward}
                        </Box>
                    </Flex>
                    <Flex className={styles.statRow}>
                        <Box>
                            Neutral:
                        </Box>
                        <Box>
                        {recent.actions.groundTechCount.neutral}
                        </Box>
                    </Flex>
                    <Flex className={styles.statRow}>
                        <Box>
                            Backward:
                        </Box>
                        <Box>
                        {recent.actions.groundTechCount.backward}
                        </Box>
                    </Flex>
                    <Flex className={styles.statRow}>
                        <Box>
                            Missed:
                        </Box>
                        <Box>
                        {recent.actions.groundTechCount.fail}
                        </Box>
                    </Flex>
                    
                </Flex>
                <Flex className={styles.extra}>
                    <Text>
                        Throws
                    </Text>
                    <Flex className={styles.statRow}>
                        <Box>
                            Up:
                        </Box>
                        <Box>
                        {recent.actions.throwCount.up}
                        </Box>
                    </Flex>
                    <Flex className={styles.statRow}>
                        <Box>
                            Forward:
                        </Box>
                        <Box>
                        {recent.actions.throwCount.forward}
                        </Box>
                    </Flex>
                    <Flex className={styles.statRow}>
                        <Box>
                            Down:
                        </Box>
                        <Box>
                        {recent.actions.throwCount.down}
                        </Box>
                    </Flex>
                    <Flex className={styles.statRow}>
                        <Box>
                            Back:
                        </Box>
                        <Box>
                        {recent.actions.throwCount.back}
                        </Box>
                    </Flex>
                </Flex>
                
            </Flex>
    )

    return (
        <>
        {winnerPlaque}
        {yourStats}
        {globalStats}
        {extras}
        {theirStats}
        
        <Flex  className={styles.actions}>
        s
        </Flex>
        
        </>
    );
    
       
}

// wins: number;
//   losses: number;
//   totalGames: number;
//   incompleteGames: number;
//   timePlayed: number;
//   kills: number;
//   deaths: number;
//   selfDestructs: number;
//   killDeath: number;
//   averageSDs: number;
//   apm: number;
//   openingsPerKill: number;
//   avgKillPercent: number;
//   comeBack2: number;
//   comeBack3: number;
//   comeBack4: number;
//   fourStocks: number;
// }