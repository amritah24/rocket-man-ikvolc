import React, { useState, useEffect } from 'react';
import './App.css';
import PageTitle from './PageTitle/PageTitle'
import PageBody from './PageBody/PageBody'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {

  let [name, setName] = useState('')
  let [items, setItems] = useState([])
  let [launchTime, setLaunchTime] = useState('')
  let [upcoming, setUpcoming] = useState(false);
const toggleUpcoming = () => setUpcoming(value => !value);

  useEffect(() => {
    if(upcoming){
      document.body.style.backgroundImage ="linear-gradient(to right, "+ "#d32ee6" +", "+ "#48094f" +")"
      fetch("https://api.spacexdata.com/v3/launches/upcoming")
      .then(res => res.json())
      .then((result) => {
        setName(name => name = '')
        setLaunchTime(launchTime = launchTime = '')
        setItems(result)
      })
    } else {
      document.body.style.backgroundImage ="linear-gradient(to right, "+ "#32a8a6" +", "+ "#062e2d" +")"
      fetch("https://api.spacexdata.com/v3/launches/next")
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        setName(name => name = result.mission_name)
        setLaunchTime(launchTime = launchTime = result.launch_date_utc)
        setItems([])
      })
    }
  })
    return(
    <div className="App">
    <PageTitle name={name === '' ? 'Next Launches' : name}/>
    <PageBody name={name} launchTime={launchTime} items={items}/>
    {upcoming ? '' :  <button className="btn" onClick={toggleUpcoming}><FontAwesomeIcon icon={faAngleDown} /></button>}
    </div>
    )
}
export default App;
