import React, { useState } from 'react';
import axios from 'axios';

export const useApi = (APIparams) => {
 const [response, setResponse]=useState(undefined);
 const [error, setError] =useState('');
 const [loading, setloading] = useState(true);

 async function fetchData (params){
     try {
         const result = await axios.request(params);
     } catch (error) {
         setError(error);
     } finally {
setloading(false);
     }
 }    

    return (
        <div>
            
        </div>
    )
}
