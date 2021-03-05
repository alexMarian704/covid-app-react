import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const key = process.env.REACT_APP_API_KEY;

const useFetch = (url) => {
    const [data, setDate] = useState('')
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null)

    const { region } = useParams();

    useEffect(() => {
        fetch(`${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key":`${key}`,
                "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
            }
        })
            .then(res => {
                if(!res.ok){
                    throw Error("Please reload the page or try again later")
                }
                return res.json()
            })
            .then(data => {
                setDate(data);
                setLoading(false)
                setError(false)
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [region])

    return { data , loading ,error}
}

export default useFetch;