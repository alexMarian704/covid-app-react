import { motion } from "framer-motion"

const Render = ({country , index}) => {
    return (
        <motion.div className="country"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{type:"spring" , stiffness:30}}
        >
            <h1>{country.Country }</h1>
            <h1>{country.NewCases}</h1>
        </motion.div>
    )
}

export default Render;