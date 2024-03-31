import base_url from "./baseUrls"

export const getUser = async () => {
        await axios.get(`${base_url}/getUser/1`)
                    .then((res)=>console.log(res.data))
                    .catch((err)=>console.log(err));
}
