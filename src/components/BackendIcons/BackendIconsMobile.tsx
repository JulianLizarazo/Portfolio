import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiTypescript, SiDocker } from "react-icons/si"
import { TbSql } from "react-icons/tb"
import { BsFillTerminalFill } from "react-icons/bs";

export const BackendIconsMobile = () => {
    return(
        <>
            <FaNodeJs className="absolute w-8 h-8 bottom-44 left-20 opacity-60"/>
            <SiExpress className="absolute w-8 h-8 bottom-28 left-8 opacity-60"/>
            <SiPostgresql className="absolute w-8 h-8 bottom-32 left-36 opacity-60"/>
            <TbSql className="absolute w-8 h-8 bottom-20 right-16 opacity-60"/>
            <SiTypescript className="absolute w-8 h-8 bottom-40 right-10 opacity-60"/>
            <BsFillTerminalFill className="absolute w-8 h-8 left-24  bottom-12 opacity-60"/>
            <SiDocker className="absolute w-8 h-8 bottom-[198px] right-[100px] opacity-60"/>
        </>
    )
};

export default BackendIconsMobile;