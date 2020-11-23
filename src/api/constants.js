export const API_KEY = '88da4655a67793b6e053e416754523b6';
export const BASE_URL = "https://api.themoviedb.org/3"

export const requests = {
    popular: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    forKids: `${BASE_URL}/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    dramas: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18&`,
    action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    docs: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    onTime: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
}

//https://api.themoviedb.org/3/trending/all/week?api_key=88da4655a67793b6e053e416754523b6$language=en-US
//https://api.themoviedb.org/3/trending/all/week?api_key=88da4655a67793b6e053e416754523b6&language=en-US