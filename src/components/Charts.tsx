
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartData,
  ChartOptions,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';


ChartJS.register(
  
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);


interface BarChartProps {
  
  horizontal ?: boolean ,
  labels : string[]
  title_1 : string ,
  title_2 : string ,
  bg_1 : string ,
  bg_2 : string ,
  data_1 : number[] ,
  data_2 : number[] ,
 
}



export const  BarChart = ( { horizontal=false , labels  , title_1 , title_2 , bg_1 , bg_2 , data_1 , data_2 } : BarChartProps)=> {

     const options:ChartOptions<"bar"> = {
        responsive : true , 
        indexAxis : horizontal ? 'y' : 'x'  , 
        plugins : {
          legend : {
            display:false,
          } ,
          title : {
            display : false ,
           
          } ,
        } ,
        scales :{
          y:{
            beginAtZero:true,
            grid:{
              display:false,
            }
          },
          x:{
            beginAtZero:true,
            grid:{
              display:false,
            }
          }
        }
      };
     
       const data:ChartData<"bar" , number[] , string> = {  //  p r o p s   d a t a
        labels ,
        datasets: [
          {
            label : title_1 ,   
            data : data_1,
            backgroundColor : bg_1,

            barPercentage : 1 ,
            categoryPercentage : 0.4 ,
            barThickness : "flex" ,
          },
          {
            label: title_2 ,
            data: data_2 ,
            backgroundColor: bg_2 ,
            
            barPercentage: 1 ,
            categoryPercentage: 0.4 , 
            barThickness:"flex" ,
            
          },
        ],
      };
      

  return <Bar width={(horizontal)?"200%":""} options={options} data={data} /> ; // set width in %
}

// doughnut chart
interface DoughnutChartProps{
  labels : string[],
  dataArray : number[],
  bg_array : string[],

  offset ?: number[], // allighnmenet of each dataset [...]
  legend ?: boolean,
  cutout ?: number|string // inner raduius  
  //                        0(no ring  == pieChart) -  90(ring)  >90 (thin ring  --doughnet chart)


}

export const DoughnutChart = ( {dataArray , labels , bg_array , offset , legend=true , cutout  } : DoughnutChartProps )=>{

  const data:ChartData<"doughnut" , number[] , string > = {
    labels: labels,
    datasets: [
      {
        data: dataArray,
        backgroundColor:  bg_array ,
        borderWidth: 0,
        offset:offset,
      },
    ],
  };

  const options:ChartOptions<"doughnut">={
    responsive: true,
    plugins:{
      legend:{
        display:legend,
        position:"bottom",
        labels:{
          padding:40,
        }
      },
     
    },
    cutout,
    

  }

  return <Doughnut data={data} options={options}/>

}

// LINE CHART

interface  LineChartProps{
  labels:string[],
  dataArr:number[],
  title:string,
  lineBackgroundColor:string,
  lineBorderColor:string
  

}

export const  LineChart = ( { labels , dataArr , title , lineBackgroundColor , lineBorderColor } : LineChartProps)=> {

  const options:ChartOptions<"line"> = {
     responsive : true , 
    
     plugins : {
       legend : {
         display:false,
       } ,
       title : {
         display : false ,
        
       } ,
     } ,
     scales :{
       y:{
         beginAtZero:true,
         grid:{
           display:false,
         }
       },
       x:{
         beginAtZero:true,
         grid:{
           display:false,
         }
       }
     }
   };
  
    const LineChartData:ChartData<"line" , number[] , string> = {  //  p r o p s   d a t a
     labels ,
     datasets: [
       {
        fill:true,// for backgroundColor filling 
         label : title,   
         data : dataArr,
         backgroundColor : lineBackgroundColor,
         borderColor:lineBorderColor
       }
     ]
   };
   

return <Line  options={options} data={LineChartData} /> ; // set width in %
}

