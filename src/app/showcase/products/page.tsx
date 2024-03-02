import React,{} from 'react'//no useefecct because then that would mean we need a cient component

type Props = {}
async function getData() {
    const res = await fetch('https://api.example.com/...')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

const Products = (props: Props) => {
    const fetchMyCategories=async()=>{
         const data =await getData();
         while(data==null){
            return 
         }
    }
   
  return (
    <div>Products</div>
  )
}

export default Products