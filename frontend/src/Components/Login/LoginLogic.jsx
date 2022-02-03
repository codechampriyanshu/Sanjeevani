export function handleSubmit(e,email,password,person,setPerson) {
  e.preventDefault()
  // console.log(email,password)
  fetch("http://localhost:8080/login",{
    method:'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({email,password}),
  }).then(res=>res.json())
    .then(res=>{
      if(res.status===400){
        return window.alert("Error: "+res.error)
      }
      else if(res.status===404){
        return window.alert(res.message)
      }
      else if(res.status===200)
          {sessionStorage.setItem("user",res.user)
          sessionStorage.setItem("userType",res.userType)
          setPerson(res.user)}
          else{
            window.alert("Check your credentials again...")
          }
        })
        
  .catch((e)=>console.log(e.message))
}