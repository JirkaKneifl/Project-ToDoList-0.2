import {Link} from "react-router-dom";
import "./NavBar.css";
import HStack from "../../basicComponents/HStack";
import { FiLogOut, FiSettings } from 'react-icons/fi';



function AboutNavBar(){
    return (
        <>
            <div className={"aboutNavBar"}>
                <HStack alignItems={"baseline"}  gap={340}>
                    <h2><Link to={"/main"} className={"toDoLogo"}>ToDo App</Link></h2>
                    <HStack gap={8} >
                        <Link className={"navLink"} to={"/settings"}><FiSettings className={"navLinkIcon"}></FiSettings></Link>
                        <Link className={"navLink"} to={"/"}><FiLogOut className={"navLinkIcon"}></FiLogOut></Link>
                    </HStack>
                </HStack>
            </div>
        </>
    )
}

export default AboutNavBar