export function newAppoint(formdata){
    const user=sessionStorage.getItem("user")
    if(formdata.type==="clinic" || formdata.type==="hospital"){
        const {institute,preferredDate,preferredTime}=formdata
        fetch(`http://localhost:8080/patient/appointment/new/${user}`,{
            method:'POST',
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({...formdata})
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status===200){
                window.alert("appointment scheduled")
            }else if(res.status===404){
                return window.alert(res.message)
            }
        })
        .catch(err=>{console.log(err)
            window.alert("some error occured")})
    }
}