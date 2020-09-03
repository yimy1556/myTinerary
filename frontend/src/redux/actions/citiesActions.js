import axios from 'axios'

const citiesActions = {
    getCities : () => async (dispatch, getState) => {
        const reply = await axios.get('http://127.0.0.1:4000/api/cities')
        const cities = reply.data.cities
        console.log(cities);
        dispatch({type: 'GETCITIES' ,payload: cities
        })
    },
    getCity : (idCity) => (dispatch, getState) => {
        const datos = getState()
        const city = datos.cities.cities.filter(city => city._id === idCity)
        dispatch({
            type:'GETCITY',
            payload: city[0]
        })
    }
}


export default citiesActions