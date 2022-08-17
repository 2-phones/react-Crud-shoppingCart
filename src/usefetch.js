import { useEffect, useState } from "react"
import axios from "axios";



const useFetch = (url,method) => {
    const [items , setItems] = useState([]);
    useEffect( () => {
            setTimeout(() => {
                axios(url ,{
                    method,
                })
            .then( res => setItems(res.data))
            }, 500);

    },[])

    return { items }
}





export default useFetch ;