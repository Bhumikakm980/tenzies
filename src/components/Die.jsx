export default Die;

function Die(props){

    
    
    return(
        
        <button style={{backgroundColor:props.isHold?"#59E391":"white"}}
        className="tenzine-button" onClick={()=>props.clickHold(props.id)}>{props.randomVal}</button>

        
       
    )
}