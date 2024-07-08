import { useState } from "react"
import AdminSidebar from "../components/AdminSidebar"


const Toss = () => {

  let [angle,setAngle] = useState<number> (0) ; // make a 3d space and rotate it on tap
 
  let handler = ()=>{
    let a = Math.round(Math.random());

    if ( a)
    {
      setAngle( (prev)=> prev + 180 ) ; // toss next value
    }
    else{
      setAngle( (prev)=> prev + 360 ) ; /// same toss value
    }
  }

  return (
    <div className="adminContainer app" >

    <AdminSidebar/>

    <main className="toss-box" >
    <h1>Toss</h1>

    <section onClick={handler} className="toss" style={{transform:`rotateY(${angle}deg)`}}> {/* section is our toss  filled  by  two  images  this will be rotated and F I L L E D    */}

      <div></div>
      <div></div>

    </section>
    
    </main>

        </div>

  )
}

export default Toss