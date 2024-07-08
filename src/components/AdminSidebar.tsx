import { useEffect, useState } from "react";
import { IconType } from "react-icons"
import { AiFillFileText } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiCoupon3Fill, RiShoppingBag3Fill } from "react-icons/ri";
import { TbMenu } from "react-icons/tb";
import { Link, Location, useLocation } from "react-router-dom"



const AdminSidebar = () => {

  let locationHook = useLocation( ) ; // give current location by l o c a t i o n  .  p a t h n a m e 

                                                                               // state to show wether burger or not
 let [isBurger, setIsBurger] = useState<boolean> (window.innerWidth<1100) ;  // true when <1100 
 let [isHam , setIsHam] = useState<boolean> (false) ;

 let Windowhandler=()=>{
  setIsBurger(window.innerWidth <1100 );
 }

 useEffect ( () => {
   
 window.addEventListener("resize" , Windowhandler) ;

   return () => {
    window.removeEventListener("resize" , Windowhandler) ;
   }

 } , [] ) ;
 



  

  // code splitting for reusablity
  return (
        <>
        {
          isBurger && <button onClick={()=>{setIsHam(true)}} className="burger"> <TbMenu /> </button>
        }

{
/*

when  b u r g e r M O D E   is there then u are rendering sidebar itself in different style

-remove sidebar from as column of grid

-add close button in sidebar

-transition back(hide) and show  
   - hide by pushing left by the width set
   -show by seting left top of position as 0


*/}
        <aside style={ isBurger ? {
          width:"20rem",
          height:"100vh",
          position:"fixed",
          left:isHam?"0":"-20rem", // slide to other left side the entire width       if isHam is false
          top:0,
          zIndex:1,
          transition:"all 0.5s"


        }:{} } > 
          

          <h2>Logo.</h2>
          <DivOne  locationHook={locationHook} /> 
           {  /* code splitting for reusablity */ }
           <DivTwo locationHook={locationHook} />
           <DivThree locationHook={locationHook} />

         { 
         isBurger&& <button id="closeBurger" onClick={()=>setIsHam(false)}>Close</button> // if burger is on then have close button  

      }

        </aside>
        </>
  )
}

function DivOne ( { locationHook  } : {locationHook:Location} )
{
  return (
    <div>
            <h5>Dashboard</h5>
            <ul>

              <Li
                text="Dashboard"
               url = "/admin/dashboard"   
               Icon={MdDashboard}
               location={locationHook} 
               />

                 <Li
                text="Product"
               url = "/admin/product"   
               Icon={RiShoppingBag3Fill}
               location={locationHook} 
               />

                 <Li
                text="Customer"
               url = "/admin/customer"   
               Icon={IoIosPeople}
               location={locationHook} 
               />

                 <Li
                text="Transaction"
               url = "/admin/transaction"   
               Icon={AiFillFileText}
               location={locationHook} 
               />
            </ul>
          </div>
  )
}
function DivTwo ( { locationHook  } : {locationHook:Location} )
{
  return (
    <div>
            <h5>charts</h5>
            <ul>

              <Li
                text="Bar"
               url = "/admin/chart/bar"   
               Icon={FaChartBar}
               location={locationHook} 
               />

                 <Li
                text="Pie"
               url = "/admin/chart/pie"   
               Icon={FaChartPie}
               location={locationHook} 
               />

                 <Li
                text="Line"
               url = "/admin/chart/line"   
               Icon={FaChartLine}
               location={locationHook} 
               />

                
            </ul>
          </div>
  )
}


function DivThree ( { locationHook  } : {locationHook:Location} )
{
  return (
    <div>
            <h5>apps</h5>
            <ul>

              <Li
                text="Stopwatch"
               url = "/admin/app/stopwatch"   
               Icon={FaStopwatch}
               location={locationHook} 
               />

                 <Li
                text="Coupon"
               url = "/admin/app/coupon"   
               Icon={RiCoupon3Fill}
               location={locationHook} 
               />

                 <Li
                text="Toss"
               url = "/admin/app/toss"   
               Icon={FaGamepad}
               location={locationHook} 
               />

                
            </ul>
          </div>
  )
}



  //    L. I. S. T.   c o m p o n e  n t 

interface  liProps {
    text : string ,
    Icon : IconType , // react icon
    url  : string ,
    location : Location ,
}

function Li (  { text  ,  Icon  ,  url , location }  :  liProps  )
{
   return (

      <li style = { {
         backgroundColor  :  location.pathname.includes(  url  )   ?  "rgba(0,115,255,0.1)"   :   "white" ,
      }}>
        <Link to = {url} style={{color:location.pathname.includes( url )  ?  "rgb(0,115,255)"  :  "black" , }}>
         
         <Icon></Icon>
          <div>{text}</div>
        </Link>
      </li>
   )

}

export default AdminSidebar ;