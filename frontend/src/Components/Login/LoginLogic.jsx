export function handleSubmit(e,email,password,person,setPerson) {
  e.preventDefault()
  fetch("http://localhost:8080/login",{
    method:'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({email,password}),
  }).then(res=>res.json())
    .then(res=>{
          console.log(res.user)
          setPerson("res.user")})
  .catch((e)=>console.log(e.message))
}