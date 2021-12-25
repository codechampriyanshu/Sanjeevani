export function getHospitals(latitude,longitude){
    let names=["Apex","Apache","Military","Vedanta","AIIMS","Paramount","City","First Aid","My Choice","24 X 7 100 beds"]
    let desc=["A hospital with 24 X 7 facilities, qualified doctors.."]
    let hospitals = []
    for(let i=0;i<10;i++){
        const mul=(i%2==0?-1:1)
        let x= (Math.random()-0.5)*mul;
        let y=(Math.random()-0.5)*mul;
        hospitals.push({name:names[i],desc:desc[0],position:{latitude:latitude+x,longitude:longitude+y}})
    }
    return hospitals
} 

export function getClinics(latitude,longitude){
    let names=["Apex","Apache","Military","Vedanta","AIIMS","Paramount","City","First Aid","My Choice","24 X 7 100 beds"]
    let desc=["A clinic with 24 X 7 facilities, qualified doctors.."]
    let clinics = []
    for(let i=0;i<10;i++){
        const mul=(i%2==0?-1:1)
        let x= (Math.random()-0.5)*mul;
        let y=(Math.random()-0.5)*mul;
        clinics.push({name:names[i],desc:desc[0],position:{latitude:latitude+x,longitude:longitude+y}})
    }
    return clinics
} 
