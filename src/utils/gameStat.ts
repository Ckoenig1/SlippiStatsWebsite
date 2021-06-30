
import { Stats } from '../types/Stats';

export class gameStat implements Stats {
  wins = 0;
  losses = 0;
  totalGames = 0;
  incompleteGames = 0;
  timePlayed = 0;
  kills = 0;
  deaths = 0;
  selfDestructs = 0;
  killDeath = 0;
  averageSDs = 0;
  apm = 0;
  openingsPerKill = 0;
  avgKillPercent = 0;
  comeBack2 = 0;
  comeBack3 = 0;
  comeBack4 = 0;
  fourStocks = 0;
  actions = {
    wavedashCount: 0,
    wavelandCount: 0,
    airDodgeCount: 0,
    dashDanceCount: 0,
    spotDodgeCount: 0,
    ledgegrabCount: 0,
    rollCount: 0,
    lCancelCount: {
      success: 0,
      fail: 0,
    },
    grabCount: {
      success: 0,
      fail: 0,
    },
    throwCount: {
      up: 0,
      forward: 0,
      back: 0,
      down: 0,
    },
    groundTechCount: {
      backward: 0,
      forward: 0,
      neutral: 0,
      fail: 0,
    },
    wallTechCount: {
      success: 0,
      fail: 0,
    },
  }
  constructor() {
   
  }

  toString(): string {
    // returns string representation exlcuding the last } so that other properties can be added
    // not using JSON stringify because it puts keys in quotes and includes the object name in the string
    return "{" +
      "wins: " + this.wins
      + ",losses: " + this.losses
      + ",incompleteGames: " + this.incompleteGames
      + ",totalGames: " + this.totalGames
      + ",timePlayed: " + this.timePlayed
      + ",selfDestructs: " + this.selfDestructs
      + ",openingsPerKill: " + this.openingsPerKill
      + ",kills: " + this.kills
      + ",killDeath: " + this.killDeath
      + ",deaths: " + this.deaths
      + ",fourStocks: " + this.fourStocks
      + ",comeBack4: " + this.comeBack4
      + ",comeBack3: " + this.comeBack3
      + ",comeBack2: " + this.comeBack2
      + ",avgKillPercent: " + this.avgKillPercent
      + ",averageSDs: " + this.averageSDs
      + ",apm: " + this.apm;
  }

  

}

