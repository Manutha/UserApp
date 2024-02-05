import React, { useState } from  'react'

const SampleComponent = () =>{ 

  const [enteredData, setEnteredData] = useState("")
  const [dataList, setDataList] = useState([])

  var people = [
    {
      FirstName: "James",
      Address: "123 Main St",
      PhoneNumber: "998-755-655"
    },
    {
      FirstName: "Anand",
      Address: "25 Koramangala",
      PhoneNumber: "555-987-6543"
    },
    {
      FirstName: "Hari",
      Address: "36 Indira Nagar",
      PhoneNumber: "990-123-456"
    }
  ];

  const searchData = ()=>{
  try{
    if(!enteredData){
      setDataList([])
      return;
    }
  const response =  people.filter(({FirstName,Address,PhoneNumber})=>FirstName.includes(enteredData) ||  Address.includes(enteredData)|| PhoneNumber.includes(enteredData))
  setDataList(response)
}catch(err){
  console.log(err.message)
}
}

  return(
    <>
    <input onChange={(e)=>setEnteredData(e.target.value)}/>
    <button onClick={searchData}>Search</button>
    {dataList.length ? <table>
      <tr>
      {Object.keys(dataList[0]).map(el=> <th>{el}</th>)}
      </tr>
      {dataList.map(data=><tr>
        <td>{data.FirstName}</td>
        <td>{data.Address}</td>
        <td>{data.PhoneNumber}</td> 
      </tr>)}
      </table>:<h4>No data to display!!</h4>}

    </>
  )

}
export default SampleComponent;

//Input and button should be rendered on load
// on click of search matched data should be rendred from the people array
// search should consider all the properties of people array
// if there is no search result then return No data to display


