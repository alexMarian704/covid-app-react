import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useFetch = (url) => {
    const [data, setDate] = useState('')
    const [loading, setLoading] = useState(true);

    const { region } = useParams();

    const key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetch(`${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key":`${key}`,
                "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDate(data);
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
            });
    }, [region])

    return { data , loading }
}

export default useFetch;