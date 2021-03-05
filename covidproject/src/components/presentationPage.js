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
        <div id="main-pre">
            <img src={covid} alt="covid" id="covidImage" />
            <Link to="/today/covid/europe"><h3 id="getInfo">Get information about Covid-19</h3></Link>
        </div>
        <div id="covidAdvice">
            <h2>How to Protect Yourself & Others</h2>
            <p>Everyone 2 and older should wear masks in public.</p>
            <p>Masks should be worn in addition to staying at least 6 feet apart, especially around people who don’t live with you.</p>
            <p>Wear your mask over your nose and mouth and secure it under your chin.</p>
            <p>If you have to continually adjust your mask, it doesn’t fit properly, and you might need to find a different mask type or brand.</p>
        </div>
    </motion.div>
)

export default Presentation;