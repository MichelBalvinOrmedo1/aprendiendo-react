import {useState} from 'react'
function ContadorClicks(){
    const  [count, setCount] = useState(0)

    const Retroceder = ()=> {
        if(count>0){
            setCount(count - 1)
        }else{
            alert("No puedes hacer click")
        }
    }
    
    return (
       <div>
        <p style={{color:'red'}}>{count}</p>
        <button onClick={() => setCount( count +1)}>Haz click</button>
        <button onClick={Retroceder}>Retroceder</button>
        <button onClick={() => setCount( 0)}>Reiniciar </button>

       </div>
    )
}
export default ContadorClicks