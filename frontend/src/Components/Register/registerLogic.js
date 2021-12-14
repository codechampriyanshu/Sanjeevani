export function handleSubmit(e,formdata){
    e.preventDefault()
    if(formdata.password!==formdata.confirmPassword){
        alert("passwords do not match..","type again")
        return;
    }
    const text=JSON.stringify(formdata)
    fetch("http://localhost:8080/register",{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:text,
  }).then(res=>res.json())
  .then((res)=>{
    if(res.status===201){
      console.log(res.user)
      return res.user;
    }
    else if(res.errors){
      console.log(res.errors.email, res.errors.password)
      window.alert(`Error: ${res.errors.email}`,res.errors.password)
    }
  })
  .catch((e)=>window.alert(e))
  return false;
}

export async function getCity(zip){
  const response= await fetch(`https://api.postalpincode.in/pincode/${zip}`)
          .then((res)=>res.json())
          .catch((e)=>console.log(e))

    if(response[0].Status==="Error"){
      window.alert("no city found with entered zip")
      return "not found"
    }
    console.log(response[0].PostOffice[0].District)
  return response[0].PostOffice[0].District
}

export async function getState(zip){
  const response= await fetch(`https://api.postalpincode.in/pincode/${zip}`)
        .then((res)=>res.json())
        .catch((e)=>console.log(e))
      
        if(response[0].Status==="Error"){
          window.alert("no state found with entered zip")
          return "not found"
        }
        console.log(response[0].PostOffice[0].State)
  return response[0].PostOffice[0].State
}

export async function getVillages(zip){
  const village=[]
  const response= await fetch(`https://api.postalpincode.in/pincode/${zip}`)
        .then((res)=>res.json())
        .catch((e)=>console.log(e))
      
        if(response[0].Status==="Error"){
          window.alert("no state found with entered zip")
          return "not found"
        }
      response[0].PostOffice.forEach((item)=>village.push(item.Name))
      console.log(village)
      return village
}