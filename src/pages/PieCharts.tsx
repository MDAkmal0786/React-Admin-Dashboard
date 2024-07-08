import AdminSidebar from "../components/AdminSidebar"
import { DoughnutChart } from "../components/Charts"


const PieCharts = () => {
  return (
    <div className="adminContainer" >

      <AdminSidebar/>
      <main className="pie-charts-box" >

        <h1>Pie & Doughnut Charts</h1>

        <div >
        <DoughnutChart 
        labels={ ["Processing" , "Shipped" , "Delivered"] }
        bg_array={["#99ff99" , "#1aff1a" , "#29a329"]}
        dataArray={[12,9,13]}
        legend={false}
        cutout={0}
        offset={[0,8,50]}
        />
        <h2>ORDER FULFILLMENT RATIO</h2>

        </div>

        <div >
        <DoughnutChart 
        labels={ [ "Laptops" , "Shoes" , "Cameras" , "Jeans" ] }
        bg_array={["#00e68a" , "#e6ac00" , "#ff1ac6" , "blue"]}
        dataArray={[40,100,80 , 60]}
        legend={false}
        cutout={90}
        offset={[0,0,0,50]}
        />
        <h2>PRODUCT CATEGORIES   RATIO</h2>

        </div>

        <div >
        <DoughnutChart 
        labels={ ["In Stock" , "Out Of Stock" ] }
        bg_array={["#6600cc" , "#33ccff" ]}
        dataArray={[40,20]}
        legend={false}
        cutout={75}
        offset={[0,70]}
        />
        <h2>STOCK AVAILABILITY</h2>

        </div>

        <div >
        <DoughnutChart 
        labels={ [ "Marketing Cost" , "Discount" , "Burnt" , "Production Cost" , "Net Margin" ] }
        bg_array={["#00b300" , "#b33c00" , "#a6ff4d" , "#cc00ff" , "#00bfff"]}
        dataArray={[32,18,5,20,25]}
        legend={false}
        cutout={75}
        offset={[0,25,15,20,90]}
        />
        <h2>REVENUE DISTRIBUTION</h2>

        </div>

        <div >
        <DoughnutChart 
        labels={ ["Teenager (Below 20)" , "Adult (20-40)" , "Older (above 40)"] }
        bg_array={["#ffb3b3" , "#ff3300" , "#bf4040"]}
        dataArray={[30,250,70]}
        legend={false}
        cutout={0}
        offset={[2,6,60]}
        />
        <h2>USERS AGE GROUP</h2>

        </div>


        <div >
        <DoughnutChart 
        labels={ [ "Admins" , "Customers"  ] }
        bg_array={["#e6005c" , "#e6b800" ]}
        dataArray={[40,250]}
        legend={true}
        cutout={60}
        offset={[5,40]}
        />
       

        </div>



        
      </main>
      </div>
  )
}

export default PieCharts