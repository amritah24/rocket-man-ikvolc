const divStyle = {
    textAlign: 'center',
    color: 'white'
}
const pStyple = {
    border: '1px solid white',
    borderRadius: '15px !important',
    padding: '1px',
    margin:'1px'
}


const TimeFormat = (props) => {  

        return (<div style={divStyle}><h1>{props.time}</h1><span style={pStyple}>{props.title}</span></div>)

}

export default TimeFormat