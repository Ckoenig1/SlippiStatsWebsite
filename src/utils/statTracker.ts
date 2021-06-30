import { userInfo } from 'os';
import { CumulativeStats } from '../types/CumulativeStats';
import { gameStat } from './gameStat';



export class statTracker implements CumulativeStats {
  mostRecent: { 
    opponent: string,
    opponentCharID: number,
    characterID: number,
    stageID: number,
    stats: gameStat,
    opStats: gameStat
  };
  total: { userCode: string,stats: gameStat; stages: gameStat[]; players: { [player: string]: gameStat; }; };
  char1: CumulativeStats["char1"];
  char2: CumulativeStats["char2"];

  constructor(track: statTracker | null) {
    this.total = {
      userCode: "????#???",
      stats: new gameStat(),
      stages: Array(35),
      players: {}
    };
    this.char1 = {
      character: 22,
      total: new gameStat(),
      stages: Array(35),
      players: {}
    };
    this.char2 = {
      character: 9,
      total: new gameStat(),
      stages: Array(35),
      players: {}
    };

    this.mostRecent = {
      opponent: "",
      opponentCharID: 0,
      characterID: 0,
      stageID: 0,
      stats: new gameStat(),
      opStats: new gameStat()
    };
    var i;
    var length = this.char1.stages.length;
    for (i = 0; i < length; i++) {
      this.char1.stages[i] = new gameStat();
      this.char2.stages[i] = new gameStat();
      this.total.stages[i] = new gameStat();
    }
  }

  
}
