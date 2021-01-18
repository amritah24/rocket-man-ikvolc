const divStyle = {
    textAlign: 'center',
    color: 'white'
}
const Pagetitle = (props) => {  
    
    return (<div style={divStyle}><h1>Upcoming: {props.name}</h1></div>)
}

export default Pagetitle