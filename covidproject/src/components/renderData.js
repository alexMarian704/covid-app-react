import { motion } from "framer-motion"
import { useParams } from "react-router-dom";
import useFetch from '../jetchData';

const Render = () => {
    const { region } = useParams();
    const { data, loading , error} = useFetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${region}`);

    return (
        <div>
            {loading && <div id="loadingDiv">Loading...</div>}
            {error && <div id="errorDiv">{error}</div>}
            {!loading && !error &&
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 30 }}
                >
                    {data.map((country, index) =>
                    (
                        <div className="country" key={index}
                            
                        >
                            <h1>{country.Country}</h1>
                            <p id="info">Active Cases : {country.ActiveCases}</p>
                            <p id="info">Total Cases : {country.TotalCases}</p>
                            <p id="info">Infection Risk : {country.Infection_Risk}</p>
                            <p id="info">Total Deaths : {country.TotalDeaths}</p>
                        </div>
                    )
                    )
                    }
                </motion.div>
            }
        </div>
    )
}

export default Render;