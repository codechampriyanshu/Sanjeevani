export function newAppoint(formdata,setFormdata){
    let text
    if(formdata.type==="pathology") text=JSON.stringify({...formdata,treated:true,disease:formdata.testName})
    else    text=JSON.stringify({...formdata})
    const user=sessionStorage.getItem("user")
        fetch(`http://localhost:8080/patient/appointment/new/${user}`,{
            method:'POST',
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:text
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status===200){
                window.alert("appointment scheduled")
                setFormdata({type:"clinic",testName:"",institute:null,preferredDate:"",preferredTime:"10:10",disease:"",comments:""})
            }else if(res.status===404){
                return window.alert(res.message)
            }
        })
        .catch(err=>{console.log(err)
            window.alert("some error occured")})
}