import AdminSidebar from "../components/AdminSidebar"
import { LineChart } from "../components/Charts"


const LineCharts = () => {
  return (
    <div className="adminContainer" >

      <AdminSidebar/>
      <main className="line-charts-box" >
      <h1>Line Charts</h1>

      <section>
        <LineChart
         labels={["January" , "February" , "March" , "April" , "May" , "June" , "July","Aug","Sept","Oct","Nov" ,"Dec"]}
         dataArr={[200,444,444,556,778,455,990,1444,256,447,1000,1200]}
         title="Users"
         lineBackgroundColor="#66ccff"
         lineBorderColor="#0088cc"
        />
        <h2>ACTIVE USERS</h2>
      </section>

      <section>
        <LineChart
         labels={["January" , "February" , "March" , "April" , "May" , "June" , "July","Aug","Sept","Oct","Nov" ,"Dec"]}
         dataArr={[40,60,244,100,143,120,41,47,50,56,32]}
         title="Products"
         lineBackgroundColor="#dd99ff"
         lineBorderColor="#aa00ff"
        />
        <h2>TOTAL PRODUCTS (SKU)</h2>
      </section>

      <section>
        <LineChart
         labels={["January" , "February" , "March" , "April" , "May" , "June" , "July","Aug","Sept","Oct","Nov" ,"Dec"]}
         dataArr={[24000,14400,24100,34300,90000,20000,25600,44700,99000,144400,100000,120000]}
         title="Revenue"
         lineBackgroundColor="#99ffbb"
         lineBorderColor="#1aff66"
        />
        <h2>TOTAL REVENUE</h2>
      </section>

      <section>
        <LineChart
         labels={["January" , "February" , "March" , "April" , "May" , "June" , "July","Aug","Sept","Oct","Nov" ,"Dec"]}
         dataArr={[9000,12000,12000,9000,1000,5000,4000,1200,1100,1500,2000,5000]}
         title="Discount"
         lineBackgroundColor="#d9b38c"
         lineBorderColor="#996633"
        />
        <h2>DISCOUNT ALLOTTED</h2>
      </section>
        
      </main>
      </div>
  )
}

export default LineCharts