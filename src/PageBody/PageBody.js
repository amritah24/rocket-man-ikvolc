import {useState, useEffect} from 'react'
import TimeFormat from "./TimeFormat";
import './PageBody.css'

const calculateTimeLeft = (launchtime) => {
    let difference = +new Date(launchtime) - +new Date()
    let timeLeft = {};
    if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
};

const PageBody = (props) => {  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.launchTime));
    useEffect(() => {
        if(props.launchTime){
            const timer=setTimeout(() => {
                setTimeLeft(calculateTimeLeft(props.launchTime));
              }, 1000);
              return () => clearTimeout(timer);
        }

      });

    if(props.launchTime){
        return (<div className="divStyle">
        <TimeFormat time={timeLeft.days} title="Days"/>
        <TimeFormat time={timeLeft.hours} title="Hours"/>
        <TimeFormat time={timeLeft.minutes} title="Minutes"/>
        <TimeFormat time={timeLeft.seconds} title="Seconds"/>
        </div>)
    } else {
            let rows = [];
            for (let i = 0; i < props.items.length; i++){
              let cell = []
                cell.push(<td className="trStyle"> {props.items[i].mission_name} </td>)
                cell.push(<td className="trStyle"> {new Date(props.items[i].launch_date_utc).getMonth() + 1} {new Date(props.items[i].launch_date_utc).getFullYear()}</td>)
                cell.push(<td className="trStyle"> {props.items[i].launch_site.site_name} </td>)
                rows.push(<tr >{cell}</tr>)
            }
        return (<div className="box">   
                    <table className="tableStyle">
                <thead>
                        <tr>
                        <th className="trStyle">Mission</th>
                        <th className="trStyle">Date(UTC)</th>
                        <th className="trStyle">Launchpad</th>
                        </tr>
                </thead>
               <tbody>
                 {rows}
               </tbody>
             </table>     
         </div>)
    }
    
}

export default PageBody