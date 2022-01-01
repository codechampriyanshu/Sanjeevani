
export function handleSubmit(e,formdata,person,setPerson){
    e.preventDefault()
    // some checks-->
    if(formdata.userType==="patient"){
      if(formdata.height===""){
        window.alert("Please enter your height.")
        return;
      }else if(formdata.weight===""){
        window.alert("please enter your weight.")
        return;
      }else if(formdata.age===""){
        window.alert("please enter your age.")
        return;
      }
    }else{
      if(formdata.licence===""){
        window.alert("You must write your licence.")
        return;
      }
    }
    if(formdata.password!==formdata.confirmPassword){
        alert("passwords do not match..","type again")
        return;
    }
    const text=JSON.stringify(formdata)
    fetch("http://localhost:8080/register",{
    method:'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body:text,
  }).then(res=>res.json())
  .then((res)=>{
    if(res.status===201){
      return window.alert(res.message)
    }
    if(res && res.user){
      setPerson(res.user)
      sessionStorage.setItem("user",res.user)
    }
    else if(res.error){
      window.alert(`Error: ${res.error}`)
    }
  })
  .catch((e)=>{
    if(e.status===413)
      window.alert("image file too large")
    else
      window.alert(e)})
}

export async function getCity(zip){   //FIXME: call api only once for city, villages and state && don't call if zip is ""
  const response= await fetch(`https://api.postalpincode.in/pincode/${zip}`)
          .then((res)=>res.json())
          .catch((e)=>console.log(e))

    if(!response || response[0].Status==="Error"){
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
      
        if(!response || response[0].Status==="Error"){
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
      
        if(!response || response[0].Status==="Error"){
          window.alert("no village found with entered zip")
          return ["not found"]
        }
      response[0].PostOffice.forEach((item)=>village.push(item.Name))
      console.log(village)
      return village
}
