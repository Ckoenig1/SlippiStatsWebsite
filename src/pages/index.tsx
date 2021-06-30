import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar"
import {createUrqlClient} from "../utils/createUrqlClient";

const Index = () => (
    <>
    <NavBar tab={-1} visible={true}/>
    
    </>
);
export default withUrqlClient(createUrqlClient)(Index);