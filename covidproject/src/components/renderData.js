import { motion } from "framer-motion"
import { useParams } from "react-router-dom";
import useFetch from '../jetchData';

const Render = () => {
    const { region } = useParams();
    const { data, loading } = useFetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${region}`);

    return (
        <div>
            {loading && <div id="loadingDiv">Loading...</div>}
            {!loading &&
                <div>
                    {data.map((country, index) =>
                    (
                        <motion.div className="country" key={index}
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 30 }}
                        >
                            <h1>{country.Country}</h1>
                            <p id="info">Active Cases : {country.ActiveCases}</p>
                            <p id="info">Total Cases : {country.TotalCases}</p>
                            <p id="info">Infection Risk : {country.Infection_Risk}</p>
                            <p id="info">Total Deaths : {country.TotalDeaths}</p>
                        </motion.div>
                    )
                    )
                    }
                </div>
            }
        </div>
    )
}

export default Render;