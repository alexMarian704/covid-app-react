import { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setDate] = useState('')
    const [loading, setLoading] = useState(true);

    const key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key":`${key}`,
                "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
            }
        })
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(data => {
                console.log(data);
                setDate(data);
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return { data , loading }
}

export default useFetch;