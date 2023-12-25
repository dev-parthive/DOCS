import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import {motion} from "framer-motion"
const Card = ({data, reference}) => {
    const {desc, fileSize, close, tag : {isOpen, tagTitle, tagColor}} = data
    console.log(tagColor)
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} whileFocus={{scale:1.1}} className="w-60 h-64 bg-zinc-700 rounded-[40PX] mt-12  cursor-move text-white p-4 relative overflow-hidden flex-shrink-0">
        <div className="w-5 h-5">
            <FaRegFileAlt size="1.1em"></FaRegFileAlt>
        </div>

        <div className="py-8">
            <p className="text-sm pb-6">{desc}</p>
        </div>

        <div className="footer absolute bottom-0 left-0 w-full  ">
            <div className="flex justify-between items-center px-4 mb-1">
                <h2>{fileSize}</h2>
                <span className="cursor-pointer">{close ? <IoMdCloseCircle color="#fff"></IoMdCloseCircle> :  <MdDownloadForOffline color="#fff"></MdDownloadForOffline>}</span>
            </div>

            {isOpen ? (<div className={`${tagColor === "blue"  ? "bg-blue-600" : "bg-green-600"} py-2 w-full flex justify-center items-center`}>
                <h3 className="text-sm font-semibold">{tagTitle}</h3>
            </div>) : 
            
            null
            }
        </div>




            </motion.div>
    );
};

export default Card;