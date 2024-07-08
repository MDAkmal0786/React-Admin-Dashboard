import { Column } from "react-table";
import TableHOC from "./TableHOC"

interface dataType{
    id:string;
    quantity:number;
    discount:number;
    amount:number;
    status:string;
}
const columns:Column<dataType>[] =[
    {
        Header:"Id",
        accessor:"id",
    },
    {
        Header:"Quantity",
        accessor:"quantity",
    },
    {
        Header:"Discount",
        accessor:"discount",
    },
    {
        Header:"Amount",
        accessor:"amount",
    },
    {
        Header:"Status",
        accessor:"status",
    } 
];

const Dashboardtable = ({data=[]}:{data:dataType[]}) => {
  return  TableHOC<dataType>(columns,data,"transaction-Box" , "Top Transaction") ( ) ; // calling for get jsx as function is returning                                                                                                                            funtion 
  
}

export default Dashboardtable