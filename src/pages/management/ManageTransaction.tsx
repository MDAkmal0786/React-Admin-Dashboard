import { ReactElement, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"
import { Link } from "react-router-dom";

interface orderItemType{

  photo :string;
  name:string;
  price:number;
  quantity:number;
  _id: string;


}


interface orderInfoType{
  name:string;
  adress:string;
  city:string;
  state:string;
  country:string;
  pincode:number;
  subTotal:number;
  tax:number;
  shippingCharges:number;
  discount:number;
  total:number;
  status:"Processing"|"Delivered"|"Shipped" ;
  orderItems:orderItemType[] ;
  _id:string;

  


}
let arr:orderItemType[] = [{

  photo : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&amp;w=1000&amp;q=804",

  name:"Puma Shoes",
  price:2000,
  quantity:3,
  _id: "sajknaskd",
}


]


const ManageTransaction = () => {

  let [order,setOrder] = useState<orderInfoType> ({

    name:"MD Akmal",
    adress:"E-338 phase-2",
    city:"Qutub Vihar",
    state:"New Delhi",
    country:"India",
    pincode:110071,
    subTotal:6000,
    tax:1000,
    shippingCharges:200,
    discount:2200,
    total:5000,
    status:"Processing",
    orderItems:arr ,
    _id:"ewknec",

  } ) ;

  let{name , adress , city , state , country , pincode , subTotal , tax , shippingCharges , discount , total , status , _id} = order ;
  return (
    <div className="adminContainer" >

      <AdminSidebar/>
      <main className="manage-transaction-box" >

        <article className="order-items">
          <h2>ORDER ITEMS</h2>
          {
            order.orderItems.map((item)=>(
             <div className="item">
              <img src={item.photo} alt="item" />
              <Link to={"/admin/product/"+item._id} >{item.name}</Link>
              <span>{`$${item.price}  X ${item.quantity} = $${item.price*item.quantity}` }</span>
              </div>

            ))
          }

        </article>

        <article className="order-info">
        <h2>ORDER INFO</h2>

        <div>
        <p className="heading">User Info</p>
        <p>Name : {name}</p>
        <p>Address : {` ${adress}, ${city}, ${state}, ${country} ${pincode}`} </p>

        <p className="heading">Amount Info</p>
        <p>Subtotal : {subTotal} </p>
        <p>Shipping Charges : {shippingCharges} </p>
        <p>Tax : {tax} </p>
        <p>Discount : {discount} </p>
        <p>Total : {total} </p>

        <p className="heading">Status Info</p>  
        Status : <span className={(status==="Processing")?"red": (status==="Delivered")?"blue":"green"}>{status}</span>

        <section>
        <button onClick={()=>{
          setOrder((prev)=>({
            ...prev,
            status:(prev.status==="Processing")?"Shipped":"Delivered"
          }))
        }}>
          Process Status
        </button>
        </section>

        </div>

        </article>

      </main>
      </div>
  )
}

export default ManageTransaction