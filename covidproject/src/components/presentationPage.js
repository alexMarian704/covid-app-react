import covid from "../Image/covid3.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Presentation = () => (
    <motion.div initial={{ scale: 0 , rotate:50 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
            stiffness: 260,
            damping: 20,
            duration: 0.9,
            type:"just"
        }}>
        <h1 id="main-title">Covid-19</h1>
        <div>
            <img src={covid} alt="covid" id="covidImage" />
            <Link to="/today/covid/europe"><h3 id="getInfo">Get information about Covid-19</h3></Link>
        </div>
    </motion.div>
)

export default Presentation;