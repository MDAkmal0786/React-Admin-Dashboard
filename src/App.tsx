import { Suspense, lazy } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader" ;


const Dashboard = lazy ( ()=>import("./pages/Dashboard") );
const Product = lazy ( ()=>import("./pages/Product") );
const Transaction = lazy ( ()=>import("./pages/Transaction") );
const Customer = lazy ( ()=>import("./pages/Customer") );
const NewProducts = lazy ( ()=>import("./pages/management/NewProducts"));
const ManageProducts = lazy ( ()=>import("./pages/management/ManageProducts"))
const ManageTransaction= lazy ( ()=>import("./pages/management/ManageTransaction"))
const BarCharts = lazy ( ()=>import("./pages/BarCharts") )
const PieCharts = lazy ( ()=>import("./pages/PieCharts") )
const LineCharts = lazy ( ()=>import("./pages/LineCharts") )

const Stopwatch = lazy ( ()=>import("./pages/StopWatch") )
const Toss = lazy ( ()=>import("./pages/Toss") )
const Coupen = lazy ( ()=>import("./pages/Coupen") )


 

const App = () => {

  return (
   <BrowserRouter>
   <Suspense fallback={<Loader></Loader>}>
   <Routes>
   <Route path="/" element={<button><Link to={"/admin/dashboard"}>Visit dashboard</Link></button>}/>
    <Route path="/admin/dashboard" element={<Dashboard/>}/>
    <Route path="/admin/customer" element={<Customer/>}/>
    <Route path="/admin/product" element={<Product/>}/>
    <Route path="/admin/transaction" element={<Transaction/>}/>
  
  <Route path="/admin/chart/bar" element={<BarCharts/>}/>
  <Route path="/admin/chart/pie" element={<PieCharts/>}/>
  <Route path="/admin/chart/line" element={<LineCharts/>}/>



 <Route path="/admin/product/new" element={<NewProducts/>} />  {/*// place new first than :id     */}
 <Route path="/admin/product/:id" element={<ManageProducts/>} />
 <Route path="/admin/transaction/:id" element={<ManageTransaction/>} />

 <Route path="/admin/app/stopwatch" element={<Stopwatch/>}/>
 <Route path="/admin/app/coupon" element={<Coupen/>}/>
 <Route path="/admin/app/toss" element={<Toss/>}/>
 
 
   </Routes>
   </Suspense>
   </BrowserRouter>
  )
}

export default App
