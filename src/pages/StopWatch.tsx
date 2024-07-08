import { useEffect, useMemo, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"

let a:number;
let TimeFormat = ( second : number )=>{

  //  00: 00: 00

  // 7400  2hour / 3 min / 20s econds

  let hr = Math.floor ( second / 3600 ) ;

  let min = Math.floor ( ( second % 3600 ) / 60)  // remainder seconds to  be consider for   m i n u t e s   and   s e c o n d s

  let sec =  ( second % 3600 ) % 60;


  let hour = hr.toString().padStart(2,"0");
  let minute = min.toString().padStart(2,"0");
  let sect = sec.toString().padStart(2,"0");

  //00: 00: 00

  return `${hour}: ${minute}: ${sect}`






}


const StopWatch = () => {

  let [second,setSecond] = useState<number> ( 0 ) ;
  let [isStarted , setIsStarted] = useState<boolean> ( false ) ;

  function StartStopHandler ()
  {
    if ( !isStarted )
      {
        setIsStarted((prev)=>!prev);
      a= setInterval( ()=>{
        setSecond((prev)=>prev+1);
       }, 1000);
      }
      else{
        clearInterval(a);
        setIsStarted((prev)=>!prev);

      }
  }

  let Time = useMemo(()=>TimeFormat(second),[second]) ;

  return (
    <div className="adminContainer app" >

    <AdminSidebar/>

    <main className="stopwatch-box" >
        <h1>Stopwatch</h1>
        <section className="stopwatch">
       
          
           <h1>{Time}</h1>
           
           <div>
           <button onClick={StartStopHandler}>{(isStarted)?"Stop":"Start"}</button>
           <button onClick={()=>{
               clearInterval(a);
               setSecond((prev)=>prev=0);
               setIsStarted(false);
           }}>Reset</button>
           </div>
           

        </section>

    </main>

        </div>

  )
}

export default StopWatch