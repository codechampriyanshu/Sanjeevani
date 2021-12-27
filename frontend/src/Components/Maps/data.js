//FIXME: give good names,descriptions, and other details of hospitals,ambulances and all....

export function getHospitals(latitude,longitude){
    let names=["Apex","Apache","Military","Vedanta","AIIMS","Paramount","City","First Aid","My Choice","24 X 7 100 beds"]
    let desc=["A hospital with 24 X 7 facilities, qualified doctors.."]
    let phones=["979582xxxx"]
    let hospitals = []
    for(let i=0;i<10;i++){
        const mul=(i%2===0?-1:1)
        let x= (Math.random()-0.5)*mul;
        let y=(Math.random()-0.5)*mul;
        hospitals.push({id:`h${i}`,name:names[i],desc:desc[0],phone:phones[0], position:{latitude:latitude+x,longitude:longitude+y}})
    }
    return hospitals
} 

export function getClinics(latitude,longitude){
    let names=["Apex","Apache","Military","Vedanta","AIIMS","Paramount","City","First Aid","My Choice","24 X 7 100 beds"]
    let desc=["A clinic with 24 X 7 facilities, qualified doctors.."]
    let phones=["979582xxxx"]
    let clinics = []
    for(let i=0;i<10;i++){
        const mul=(i%2===0?-1:1)
        let x= (Math.random()-0.5)*mul;
        let y=(Math.random()-0.5)*mul;
        clinics.push({id:`c${i}`,name:names[i],desc:desc[0],phone:phones[0], position:{latitude:latitude+x,longitude:longitude+y}})
    }
    return clinics
} 

export function getPathology(latitude,longitude){
    let names=["Apex","Apache","Military","Vedanta","AIIMS","Paramount","City","First Aid","My Choice","24 X 7 100 beds"]
    let desc=["A lab with 24 X 7 facilities, qualified workers.."]
    let phones=["979582xxxx"]
    let pathLabs = []
    for(let i=0;i<10;i++){
        const mul=(i%2===0?-1:1)
        let x= (Math.random()-0.5)*mul;
        let y=(Math.random()-0.5)*mul;
        pathLabs.push({id:`p${i}`,name:names[i],desc:desc[0],phone:phones[0], position:{latitude:latitude+x,longitude:longitude+y}})
    }
    return pathLabs
} 

export function getAmbulance(latitude,longitude){
    let names=["Apex","Apache","Military","Vedanta","AIIMS","Paramount","City","First Aid","My Choice","24 X 7 100 beds"]
    let desc=["An ambulance with 24 X 7 facilities, well experienced drivers.."]
    let phones=["979582xxxx"]
    let ambulances = []
    for(let i=0;i<10;i++){
        const mul=(i%2===0?-1:1)
        let x= (Math.random()-0.5)*mul;
        let y=(Math.random()-0.5)*mul;
        ambulances.push({id:`p${i}`,name:names[i],desc:desc[0],phone:phones[0], position:{latitude:latitude+x,longitude:longitude+y}})
    }
    return ambulances
} 
