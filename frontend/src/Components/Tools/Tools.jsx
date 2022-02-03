import {FaUserPlus,FaFileMedical,FaAmbulance,FaSyringe} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { BiLocationPlus,BiVideoPlus} from 'react-icons/bi'
import {GiMedicines} from 'react-icons/gi'
import {BsTelephonePlus} from 'react-icons/bs'
const Tools=()=>{
    return (
        <div className="px-4 py-8 md:px-8 md:py-10" id="Tools">
        <span className="block py-5 text-center text-blue-800 select-none md:text-3xl md:font-bold md:mt-6">Some quick Features</span>
        <div className="grid grid-cols-3 gap-4">
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/appointment">
                <FaUserPlus className="w-12 h-12 text-blue-700"/>
                <span className="text-sm-bold ">Appointment</span>
            </Link>
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/nearby/clinics">
                <BiLocationPlus className="w-12 h-12 text-blue-700"/>
                <span className="text-sm-bold ">Doctors nearby</span>
            </Link>
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/profile">
                <FaFileMedical className="w-12 h-12 text-blue-700"/>
                <span className="text-sm-bold ">My schedule</span>
            </Link>
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/profile">
                
                <BiVideoPlus className="w-12 h-12 text-blue-700"/>
                <span className="text-sm-bold ">Audio/Video</span>
            </Link>
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/nearby/labs">
                <FaSyringe className="w-12 h-12 text-blue-600"/>
                <span className="text-sm-bold ">Pathology</span>
            </Link>
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/nearby/hospitals">
                <FaAmbulance className="w-12 h-12 text-blue-700"/>
                <span className="text-sm-bold ">Hospitals</span>
            </Link>
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/profile">
                <GiMedicines className="w-12 h-12 text-blue-700"/>
                <span className="text-sm-bold">Medicines</span>
            </Link>
            <Link className="flex flex-col items-center justify-center cursor-pointer" to="/profile">
                <BsTelephonePlus className="w-12 h-12 text-blue-700"/>
                <span className="text-sm ">Ambulances</span>
            </Link>
        </div>
        </div>
    )
}

export default Tools