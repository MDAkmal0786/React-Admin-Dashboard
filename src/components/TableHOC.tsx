import React from 'react'
import { Column, useTable , useSortBy , usePagination   } from 'react-table'

function TableHOC<T extends Object> (columns:Column<T>[] , data : T[] , containerClassname:string , heading : string ) {  // generic for user to give any column and data of row
  // so we have to mention type in typescript   so   column,data is array of object which user will specify {name:"nnc",}

  return function HOC( ) {

    
    //@ts-ignore
   const {getTableProps , getTableBodyProps , headerGroups , page  , prepareRow ,nextPage , previousPage,canNextPage,canPreviousPage , state:{pageIndex} , pageCount , gotoPage} = useTable( { columns ,
    data , 
    initialState:{
    //  @ts-ignore
      pageSize:4,
      //pageIndex:0 for initaial page


      // for pagination . . . . usePagination hook + use { page } except row  + use {nextpage prevpage pagecount pageindex gotopage to make buttons to go to going to pages } + add initailState as INITIAL pageSize
    },
   },
   useSortBy,usePagination
  ) ;

    // now pass the props in thead(tr--th)  tbody(tr-td) 


  return (<div id='tableBox' className="transaction-Box">
    <h2>{heading}</h2>

    <table className='table' {...getTableProps() }>
      <thead>
        {
            headerGroups.map( (headerGroup)=>(
               //  for sorting add usesortby hook + getSortByToggle + emoji to show on sort (asc+dec)
               <tr {...headerGroup.getHeaderGroupProps()} >
               {
                headerGroup.headers.map((column:any)=>(
                   <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                     {column.render("Header")}
                     {
                      column.isSorted && (// when only sorted
                        <span>{column.isSortedDesc ? "🔽":"🔼" }</span>
                      )
                     }
                   </th>
                ))
               }

               </tr>

            ) )
        }
      </thead>



      <tbody {...getTableBodyProps()}>
        {
          page.map((row:any)=>{
            prepareRow(row);

           return( <tr {...row.getRowProps()}>
           {
               row.cells.map((cell:any)=>(
                     <td {...cell.getCellProps()}>
                      {cell.render("Cell")}

                     </td>
               ))
           }
            </tr> )
       })
        }

      </tbody>
    </table>
    
   
    <div className='buttons'>
    <button disabled={pageIndex==0} onClick={()=> gotoPage(0)}>First</button>
    <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
    <span> {pageIndex+1} of {pageCount} </span>
    <button disabled={!canNextPage} onClick={nextPage}>Next</button>
    <button disabled={pageIndex>=pageCount-1} onClick={()=> gotoPage(pageCount-1)}>Last</button>
      </div>


    </div>) 
  
  }
}

export default TableHOC