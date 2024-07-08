import { ReactElement, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface dataType{
  user:string,
  amount:number,
  discount:number,
  quantity:number,
  status:ReactElement,
  action:ReactElement,
}

let column:Column<dataType>[] = [

  {
    Header:"User",
    accessor:"user"
  },
  {
    Header:"Amount",
    accessor:"amount"
  },
  {
    Header:"Discount",
    accessor:"discount"
  },
  {
    Header:"Quantity",
    accessor:"quantity"
  },
  {
    Header:"Status",
    accessor:"status"
  },
  {
    Header:"Action",
    accessor:"action"
  }
] ;

let arr:dataType[] =[
  {
    user:"Charas",
    amount:4500,
    discount:400,
    quantity:3,
    status:<span style={{color:"red"}}>Processing</span>,
    action:<Link to={"/admin/transaction/sajknaskd"}>Manage</Link>
  },
  {
    user:"Xaviour",
    amount:6999,
    discount:500,
    quantity:6,
    status:<span style={{color:"#00c300"}}>Shipped</span>,
    action:<Link to={"/admin/transaction/sajknaskd"}>Manage</Link>
  },
  {
    user:"Xaviour",
    amount:6999,
    discount:500,
    quantity:6,
    status:<span style={{color:"blue"}}>Delivered</span>,
    action:<Link to={"/admin/transaction/sajknaskd"}>Manage</Link>
  }
];


const Transaction = () => {

  let [data] = useState<dataType[]>(arr) ;

  let table = TableHOC<dataType>(column , data , "transaction-box" , "Transactions") ;
  return (
    <div className="adminContainer" >

    <AdminSidebar/>
    <main className="product" >
{table()}
    </main>
    </div>
  )
}

export default Transaction