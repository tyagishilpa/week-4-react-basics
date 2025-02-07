/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */


function App() {

  return <div>
   <CardWrapper>
   <TextWrapper>
    helloowww
  </TextWrapper>
   </CardWrapper>
 
   <CardWrapper>
    heyy there
   </CardWrapper>

    {/* <CardWrapper  innerComponent={<TextComponent />} /> */}
   
  </div>
  
}

function CardWrapper({children}){
  return <div style={{border:"2px solid black", padding:"20px"}}>
  {children}

  </div>
}

function TextWrapper({children}){
  return <div style={{border:"2px solid hotpink", padding:"20px"}}>
    {children}
  </div>
}
// function CardWrapper({innerComponent}){
//    return <div style={{border: "2px solid black", padding:"20px"}}>
//     {innerComponent}
//    </div>
// }

// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }



export default App
