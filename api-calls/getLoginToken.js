import * as nodeFetch from 'node-fetch'


export const getLoginToken = async (adminDetails) => {
    const response = await nodeFetch('http://localhost:2221/api/login', {
        method: 'POST',
        body: JSON.stringify ({"username": adminDetails.username,"password": adminDetails.password})//+

         }) 
         console.log(process.env.ADMIN_PASSWORD)
         if (response.status !==200){
            throw new Error('An error occured trying to retrive the Login token')
         }
         const body = await response.json()
         
         return body.token
     }
