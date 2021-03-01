import covid from "../Image/covid3.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Presentation = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ duration: 1.3}}>
        <h1 id="main-title">Covid-19</h1>
        <div>
            <img src={covid} alt="covid" id="covidImage" />
            <Link to="/today/covid"><h3 id="getInfo">Get information about Covid-19</h3></Link>
        </div>
    </motion.div>
)

export default Presentation;