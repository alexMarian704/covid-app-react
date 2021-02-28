import { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setDate] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5aa5e98cd6msheb588d7b778cff3p1acd49jsnf8c2db9c9191",
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