import AdminSidebar from "../components/AdminSidebar"
import { BarChart } from "../components/Charts"


const BarCharts = () => {
  return (
    <div className="adminContainer" >

      <AdminSidebar/>
      <main className="bar-charts-box" >
    
     <h1>Bar Charts</h1>

     <div className="bar-chart-styling">
     <BarChart 
     labels={["January" , "february" , "March" , "April" , "May" , "June" , "July"]}
     title_1="Products"
     title_2="Users"
     bg_1="#290066"
     bg_2="#ffcccc"
     data_1={[200,444,343,556,778,455,990]}
     data_2={[300,144,433,655,237,755,190]}
     />
      <h3>Top Selling Products &amp; Top Customers</h3>
     </div>
     


     <div className="bar-chart-styling">
     <BarChart 
     horizontal={true}  // increase the width of horizontal bar by width prop
     labels={["January" , "february" , "March" , "April" , "May" , "June" , "July","Aug","Sept","Oct","Nov" ,"Dec"]}
     title_1="Orders"
     title_2=""
     bg_1="#00b3b3"
     bg_2=""
     data_1={[200,444,343,556,778,455,990,444,122,334,890,909]}
     data_2={[]}
     />
       <h3>ORDERS THROUGHOUT THE YEAR</h3>
     </div>
   
  

        
      </main>
      </div>
  )
}

export default BarCharts