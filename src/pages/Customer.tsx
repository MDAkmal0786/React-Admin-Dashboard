import { Column } from "react-table"
import AdminSidebar from "../components/AdminSidebar"
import { ReactElement, useCallback, useState } from "react"
import TableHOC from "../components/TableHOC";
import { MdDelete } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

interface dataType{
  avatar:ReactElement,
  name:string,
  gender:string,
  email :string,
  role:string,
  action:ReactElement
}

let column:Column<dataType>[] = [

  {
    Header:"Avatar",
    accessor:"avatar"
  },
  {
    Header:"Name",
    accessor:"name"
  },
  {
    Header:"Gender",
    accessor:"gender"
  },
  {
    Header:"Email",
    accessor:"email"
  },
  {
    Header:"Role",
    accessor:"role"
  },
  {
    Header:"Action",
    accessor:"action"
  }
] ;

let arr:dataType[]=[{

  avatar:<img src={"https://randomuser.me/api/portraits/women/54.jpg"} alt={"Shoes"} />,
  name:"Emily Parmer",
  gender:"female",
  email :"emily.parmer@example.com",
  role:"user",
  action:<button><FaTrash/></button>

},
{

  avatar:<img src={"https://randomuser.me/api/portraits/women/50.jpg"} alt="Shoes" />,
  name:"May Scoot",
  gender:"female",
  email :"aunt.may@example.com",
  role:"user",
  action:<button><FaTrash/></button>

}

];


const Customer = () => {

  let[data] = useState<dataType[]> ( arr ) ;

  let table = useCallback(TableHOC<dataType> ( column , data , "dashboard-customer-box" , "Customers" ) , [] ) ;
  return (
    <div className="adminContainer" >

    <AdminSidebar/>
    <main className="customer" > 
      {table()}
    </main>

    </div>
  )
}

export default Customer