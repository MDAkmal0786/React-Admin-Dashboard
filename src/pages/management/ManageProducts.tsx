import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"

let img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&amp;w=1000&amp;q=804"


const ManageProducts = () => {

  let [name,setName]   = useState<string> ("Puma Shoes");
  let [price,setPrice] = useState<number> (2000);
  let [stock,setStock] = useState<number> (10);
  let [photo,setPhoto] = useState<string> (img);

  let [nameUpdate  , setNameUpdate]   = useState<string> ("Puma Shoes");
  let [priceUpdate , setPriceUpdate] = useState<number> (2000);
  let [stockUpdate , setStockUpdate] = useState<number> (10);
  let [photoUpdate , setPhotoUpdate] = useState<string> (img);

  let changeImageHandler = ( e:ChangeEvent<HTMLInputElement>)=>{

    let file:File | undefined = e.target.files?.[0]; // ?. operator for allowing undefined as well to not throw exception

    let reader : FileReader = new FileReader();

    if ( file )
      {
        reader.readAsDataURL(file);
        reader.onloadend= ()=>{
          if ( typeof reader.result==="string") setPhoto(reader.result) ;
        }

      }

  }

  return (
    <div className="adminContainer" >

    <AdminSidebar/>
    <main className="New-product-container" > 

    <section className="manage-product-side">
       {
         ( stockUpdate>0) ? <span className="green">{stockUpdate} Available</span> : <span className="red">Not Available</span>
       }
        <p className="id">ID - fsdfsfsggfgdf</p>
        <img src={photoUpdate} alt="product"/>
        <p className="name">{nameUpdate}</p>
        <h3>${priceUpdate}</h3>

      
    </section>

    <div className='new-product-component-container'>
      <h2>MANAGE</h2>

     <form>
     <label htmlFor="name">Name</label>
      <br></br>
      <input required type='text' id='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>


      <label htmlFor="price">Price</label>
      <br></br>
      <input required type='number' id='price' placeholder='Price' value={price} onChange={(e)=>setPrice(Number(e.target.value))}/>

      <label htmlFor="stock">Stock</label>
      <br></br>
      <input required type='number' id='stock' placeholder='Stock' value={stock} onChange={(e)=>setStock(Number(e.target.value))}/>

      <label htmlFor="photo">Photo</label>
      <br></br>
      <input required type='file' id='photo' accept="image/*"  onChange={changeImageHandler}/>

     

      <button type='submit' onClick={()=>{
        
        setNameUpdate(name);
        setPriceUpdate(price);
        setStockUpdate(stock);
        setPhotoUpdate(photo);
      }}>Update</button>


     </form>
    </div>
    </main>
    </div>
  )
}

export default ManageProducts