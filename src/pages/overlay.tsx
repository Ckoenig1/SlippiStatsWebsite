import { TotalStats } from "../components/TotalStats";
import * as React from 'react';
import { statTracker } from "../utils/statTracker";
import { ResultsStats } from "../components/ResultsStats";
import { NavBar } from "../components/NavBar";
import { StatWindow } from "../components/StatWindow";

const Overlay = () => {
  const [tracker, setTracker] = React.useState(new statTracker(null))
  const [show,setShow] = React.useState(false)
  const [currentTab, setCurrentTab] = React.useState(0)

  React.useEffect(() => {
    let fixedWindow :any = window
    // window is accessible here.
    
    fixedWindow.addEventListener('keyup', event => {
      if(event.isComposing || event.keyCode === 229){
        return
      }
      if(event.code == 'KeyE'){
        setShow(e => !e)
      }
      if(event.code == "ArrowRight"){
        setCurrentTab(e => ((e + 1) % 3))
      }
      if(event.code == "ArrowLeft"){
        setCurrentTab(e => {
          if(e == 0){
            return 2;
          }
          else{
            return (e - 1)
          }
        })
      }
    })
    fixedWindow?.api?.receive('fromMain', (data) => {
      console.log(data) 
      setTracker(data)
    })
  }, []);

    return (
    <>
    <NavBar tab={currentTab} visible={show}/>
    <StatWindow tab={currentTab} visible={show} stats={tracker}/>
    </>
    );
};
export default Overlay;
// React.useEffect(() => {
//   let fixedWindow :any = window
//   // window is accessible here.
//   console.log("in effect")
//   fixedWindow.api.receive('fromMain', (data) => {
//     console.log(data) 
//     tracker = data
//   })
// }, []);
  