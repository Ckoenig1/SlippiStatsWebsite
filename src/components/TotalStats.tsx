
import React from 'react'
import {Stats} from '../types/Stats'
import styles from './TotalStats.module.css'

interface TotalStatsProps {
    stats: Stats,
    visible: boolean
}

export const TotalStats: React.FC<TotalStatsProps> = ({stats,visible}) => {
        
    if(!visible){
        return null;
    }

    return (
        <div className={styles.statBox}>
            <div className={styles.statRow}>
                <div className={styles.statName}>
                    WIN RATE:
                </div>
                <div>
                    {((stats.wins/(stats.totalGames - stats.incompleteGames)) * 100).toFixed(2)}%
                </div>
            </div>
            <div className={styles.statRow}>
                <div className={styles.statName}>
                    WON:
                </div>
                <div>
                    {stats.wins}
                </div>
            </div>
            <div className={styles.statRow}>
                <div className={styles.statName}>
                    LOST:
                </div>
                <div>
                    {stats.losses}
                </div>
            </div>
            <div className={styles.statRow}>
                <div className={styles.statName}> 
                    INCOMPLETE:
                </div>
                <div>
                    {stats.incompleteGames}
                </div>
            </div>
            <div className={styles.statRow}>
                <div className={styles.statName}>
                    Time Played:
                </div>
                <div>
                    {(stats.timePlayed/(60*60)).toFixed(2)} Hours
                </div>
            </div>
            <div className={styles.statRow}>
                <div className={styles.statName}>
                    K/D:
                </div>
                <div>
                    {stats.killDeath.toFixed(2)}
                </div>
            </div>
            <div className={styles.statRow}>
                <div className={styles.statName}>
                    KILLS:
                </div>
                <div>
                    {stats.kills}
                </div>
            </div>
            <div className={styles.statRow}>
                <div className={styles.statName}>
                    DEATHS:
                </div>
                <div>
                    {stats.deaths}
                </div>
            </div>
        </div>
    );
    
       
}
