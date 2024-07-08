import { IoMdNotificationsOutline } from "react-icons/io"
import AdminSidebar from "../components/AdminSidebar"
import { BsSearch } from "react-icons/bs"
import { IoSearchOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa"
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6"

import Data from "../assets/data.json"
import { BarChart, DoughnutChart } from "../components/Charts"
import Dashboardtable from "../components/Dashboardtable"
import { BiMaleFemale } from "react-icons/bi"
import data from '../assets/data.json'



const Dashboard = ( ) => {
  return (

     <div className="adminContainer" >

      <AdminSidebar/>
      <main className="dashboard" >

         <div className="bar" >

                <BsSearch />
                <input type="text"  placeholder="Search for data, users, docs" ></input>
                 <FaRegBell></FaRegBell>
                 <img style={{height:"2rem", width:"2rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&amp;usqp" alt="User" ></img>
         </div>

         <section className="widgetcontainer">
            <WidgetItem heading={"Revenue"} value={340000} percentage={40} color={"rgb(0,115,255)"} amount={true}/>
            <WidgetItem heading={"Users"} value={400} percentage={-14} color={"rgb(0,115,255)"} amount={false}/>
            <WidgetItem heading={"Transactions"} value={23000} percentage={80} color={"rgb(0,115,255)"} amount={false}/>
            <WidgetItem heading={"Products"} value={1000} percentage={30} color={"rgb(0,115,255)"} amount={false}/>
         </section>


         <section className="graph-container">

        <div className="revenue-chart">
           <h2>REVENUE & TRANSACTION</h2>
          <BarChart 
         
          labels={["january" , "february" , "march" ,"april","may","june","july" ]} 
          title_1="Revenue" title_2="Transaction" 
          bg_1="rgb(0,115,255)"
          bg_2="rgba(53,162,235,0.8)" 
          data_1={[200,444,343,556,778,455,990]}
          data_2={[300,144,433,655,237,755,190]}
          />

        </div>
        <div className="dashboard-categories">
        <h2>INVENTORY</h2>
        <div>
        {
          data.categories.map(function(i)
         {
             return(
               <CategoryItem heading={i.heading}  value={i.value} 
               color={`hsl(${i.value*4} , ${i.value}% , 50% )`} />
             )
         })
        }
        
        

        </div>
        </div>

         </section>

   
         <section className="transaction-container">

            <div className="gender-chart">
               <h2>GENDER RATIO</h2>
               <DoughnutChart labels={["Female" , "Male"] }  dataArray={[12,19]}  bg_array={["hsl(340,82%,56%)" , "rgba(53,162,235,0.8)" ]} cutout={90} />
               <p><BiMaleFemale/></p>

            </div>

           <Dashboardtable data={Data.transaction}/>
        
         </section>

      </main>


     </div>
  )
}
interface WidgetItemProps{
  heading: string;
  value : number;
  percentage : number;
  color:string;
  amount ?: boolean;


}

function WidgetItem( {heading , value , percentage , color , amount} : WidgetItemProps )
{
    
   return (
      <article className="widget"> 

         <div className="widgetInfo">
            <p>{heading}</p>
            <h4>{(amount) ? `$${value}` : value }</h4>
            {
               ( percentage > 0 ) ? (<span style={{color:"#05b205"}}><FaArrowTrendUp/> +{percentage}%</span>) : (<span style={{color:"red"}}><FaArrowTrendDown/>{percentage}%</span>)
            }
         </div>
         

         <div className="widgetCircle"  style = { { 
            
           background:`conic-gradient(
            rgb(0,115,255) ${(Math.abs(percentage)/100)*360}deg,
             rgb(255,255,255) 0
             )` 
           }}>
         <span style = {{color:`${color}` }} >
            {percentage}%
         </span>
         </div>


      </article>
   )
}
interface CategoryItemProps{

   heading : string;
   value : number;
   color :string;

}

function CategoryItem ( {heading , value , color} : CategoryItemProps )
{
  return (
   <div className="category-item">

      <h5 style={{ letterSpacing:"1px", fontWeight:"300"}}>{heading}</h5>
      <div>
         <div style={{ backgroundColor: `${color}` , width:`${value}%`, height:"0.5rem" ,borderRadius:"20px" }}>

         </div>
      </div>
      <span>{value}%</span>
   
   </div>
  )
}

export default Dashboard