
import { useEffect, useState } from 'react';
import './App.css'
import Die from './components/Die';
import ReactConfetti from 'react-confetti';


function App() {
  
  var isWon=false;
  const[dieNum,setDieNum]=useState(()=>generateRandomDie());

  if(dieNum.every(item=>item.isHold)&& dieNum.every(item=>item.randomVal==dieNum[0].randomVal)){
     isWon=true;
  }


  // const dieVal=[1,2,3,4,5,6,7,8,9,0]
  // function generateRandomDie(){
  //   var dieVal=[];
  
  //   for (var i=0;i<10;i++){
  //    var dieNum= Math.floor(Math.random()*10)
  //    dieVal.push(dieNum);
  //   }
  //   return dieVal;
  // }


  
  


  function generateRandomDie(){
   return new Array(10).fill().map(()=>({randomVal:(Math.floor(Math.random()*10)), isHold:false}))
  

  }

  function clickHold(i){
    // setDieNum(dieNum.map((item,i)=>{
    //   return preVal=>{...preVal,isHold:true}
    // }))
    // console.log(i);
    setDieNum(preVal=>preVal.map((item,id)=>id==i?{...item,isHold:!item.isHold}:item
      )
    
    )
  }
  
  function clickGenerateNum(){
    // setDieNum(generateRandomDie);
    setDieNum(oldVal=>{
      return oldVal.map((item)=>{
        return item.isHold==false?{...item,randomVal:(Math.floor(Math.random()*10))}:item;
      })
    })
  }

  function reStartGame(){
    setDieNum(generateRandomDie);
  }
  

  return (
    <>
    <main className="mainComponent">
     
    {/* {dieNum.map(()<Die val={dieNum} clickHold={clickHold}></Die>) */}
    <p className='disclaimer'>Roll until all dices are same.Click each die to freeze it at its current value between rolls</p>
    <div className="button-container">
    {isWon==true&&<ReactConfetti></ReactConfetti>} 
    {dieNum.map((item,i)=><Die randomVal={item.randomVal} isHold={item.isHold} clickHold={clickHold} id={i}></Die>)}
    </div>
    {isWon==false?
    <button onClick={clickGenerateNum} className='roll-button'>Roll</button>:
    <button onClick={reStartGame} className='roll-button'>Restart the game</button>
    }
    </main>
    
    </>
  )
}

export default App
