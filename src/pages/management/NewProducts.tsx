import React, { ChangeEvent, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'


const NewProducts = () => { 

  let [name,setName]   = useState<string> ("");
  let [price,setPrice] = useState<number> ();
  let [stock,setStock] = useState<number> ();
  let [photo,setPhoto] = useState<string> ();

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
    <div className='new-product-component-container'>
      <h2>NEW PRODUCT</h2>

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

     

      <button type='submit'>Create</button>


     </form>
    </div>
    </main>
    </div>
  )
}

export default NewProducts