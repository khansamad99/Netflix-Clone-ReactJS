const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movies?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movies?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movies?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movies?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movies?api_key=${API_KEY}&with_genres=99`
}

export default requests;