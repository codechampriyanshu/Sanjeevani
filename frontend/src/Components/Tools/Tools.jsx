import {FaUserPlus,FaFileMedical,FaAmbulance,FaLaptopMedical,FaSyringe} from 'react-icons/fa'
import { BiLocationPlus,BiVideoPlus} from 'react-icons/bi'
import {GiMedicines} from 'react-icons/gi'
import {BsTelephonePlus} from 'react-icons/bs'
const Tools=()=>{
    return (
        <div className="px-4 py-8">
        <span className="block py-5 text-center text-blue-800 select-none md:text-3xl md:font-bold md:mt-6">Some quick Features</span>
        <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center">
                <FaUserPlus className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">Appointment</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <BiLocationPlus className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">Doctors nearby</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <FaFileMedical className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">My schedule</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <BiVideoPlus className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">Audio/Video</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <FaSyringe className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">Pathology</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <FaAmbulance className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">Ambulance</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <GiMedicines className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">Medicines</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <BsTelephonePlus className="w-8 h-8 text-blue-700"/>
                <span className="text-sm ">Guide Contacts</span>
            </div>
        </div>
        </div>
    )
}

export default Tools