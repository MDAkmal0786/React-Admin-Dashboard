import { ReactElement, useCallback, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"

 interface dataType{
  photo : ReactElement,
  name : string,
  price : number,
  stock : number,
  action:ReactElement
 }

 let column:Column<dataType>[] = [

     {
      Header:"Photo",
      accessor:"photo"
     },
     {
      Header:"Name",
      accessor:"name"
     },
     {
      Header:"Price",
      accessor:"price"
     },
     {
      Header:"Stock",
      accessor:"stock"
     },
     {
      Header:"Action",
      accessor:"action"
     },

 ];

 let arr:dataType[] =[
  {
    photo:<img src={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&amp; w=1000&amp;q=804"} alt="Shoes"/>,
    
    name:"Puma Shoes Air Jordan Cook Nigga 2023",
    price:690,
    stock:3,
    action:<Link to={"/admin/product/sajknaskd"}>Manage</Link>

  },
  {
    photo:<img src="https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg" alt="laptop "></img>,
    
    name:"Macbook",
    price:232087,
    stock:2133,
    action:<Link to={"/admin/product/sdaskdnkasjdn"}>Manage</Link>

  }
]


const Product = () => {

  let[data] = useState<dataType[]>(arr);
  
   let table = useCallback(
    TableHOC<dataType>(column , data , "dashboard-product-box" , "Products" ) , []
   );
    
  return (
    <div className="adminContainer" >

    <AdminSidebar/>
    <main className="product" >
      { 
         table()
      }
      <Link className="add" to={"/admin/product/new"}><FaPlus /></Link>

    </main>
    </div>
  )
}

export default Product