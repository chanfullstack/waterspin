import axios from "axios"

const RandomMenuAPI = `https://www.themealdb.com/api/json/v1/1/random.php`

async function GetFoodRecipe(ID) {
    // const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
    // return response

    return new Promise(async (resolve, reject) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)

        resolve(response)
    })

    // return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)

}


export { RandomMenuAPI, GetFoodRecipe }