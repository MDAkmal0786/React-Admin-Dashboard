import { FormEvent, FormEventHandler, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"



let posibbleNum="0123456789";
let posibbleChar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let posibbleSym="~!@#$%^&*+?";


const Coupen = () => {

  let[text,setText] = useState<string> ("");
  let[size,setSize] = useState<number> (8);
  let[isNumber,setIsNumber] = useState<boolean> (false);
  let[isChar,setIsChar] = useState<boolean> (false);
  let[isSybmol,setIsSybmol] = useState<boolean> (false);
  let[coupen,setCoupen] = useState<string> ("");

  let[isCopy,setIsCopy] = useState<boolean> (false);

  let copyHandler= (coupen : string)=>{

    window.navigator.clipboard.writeText(coupen);
    setIsCopy(true);

  }

  let SubmitHandler = ( e:FormEvent<HTMLFormElement>)=>{

    e.preventDefault(); // cancel  F o r m  submit event causing  reload

       if ( !isNumber && !isChar && ! isSybmol)
       {
       return alert("CHOOSE any one  atleast");
       }
  // P R E P A R E  coupenon the basis of info  update coupen state


       let result :string = text || "" ;

       let toAddlength = size-text.length ; // to be added ...char sym or num


       //possible string

       let possibleItems = "" ;

       if ( isNumber )
       {
        possibleItems+=posibbleNum;
       }
        if (isChar)
       {
        possibleItems+=posibbleChar;
       }
       if(isSybmol)
       {
        possibleItems+=posibbleSym;
       }


       for ( let i=0; i<toAddlength; i++ )  // add these no   char / sym / num    in result coupen 
       {

        let index = ~~(Math.random()*possibleItems.length)
        result+=possibleItems[index];

           
          
       }

       setCoupen(result);
       setIsCopy(false);


      
  };

  return (
    <div className="adminContainer app" >

    <AdminSidebar/>

    <main className="coupon-box" >
    <h1>Coupon</h1>
    <section className="coupen-box">
    <form className="coupen-form" onSubmit={SubmitHandler}>

    <div className="coupenTwoInput">
    <input id="text" type="text" placeholder="Text to include"  value={text} maxLength={size} onChange={(e)=>setText(e.target.value) }/>
    <input id="size" type="number"   value={size} min={8} max={25} onChange={(e)=>setSize(Number(e.target.value)) }/>
    </div>

    <fieldset>
      <legend> Include</legend>

      <input type="checkbox" checked={isNumber} onChange={()=>setIsNumber((prev)=>!prev)} id="number"/>
      <span >Numbers</span>

      <input type="checkbox" checked={isChar} onChange={()=>setIsChar((prev)=>!prev)} id="char"/>
      <span >Characters</span>

      <input type="checkbox" checked={isSybmol} onChange={()=>setIsSybmol((prev)=>!prev)} id="symbol"/>
      <span >Symbols</span>
            
    </fieldset>

    <button type="submit">Generate</button>
    </form>


  {
    coupen && (
    <code>{coupen}  <span onClick={ ()=> copyHandler(coupen) }>{(isCopy)?"Copied":"Copy"}</span> </code>
    )
  }

    </section>

    </main>

        </div>

  )
}

export default Coupen