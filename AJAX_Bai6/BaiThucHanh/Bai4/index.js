const API_KEY = 'a2f3e3378c06ccf0279e3d7689c9f880';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
let imgUrl = '';
let URL_POSTER = `http://image.tmdb.org/t/p/w500`;
let movies = document.getElementById('movies');
let data = [];

async function render() {
  data = await axios.get(API_URL).then((res) => res.data.results);
  let newData = [...data]
    .map((film) => {
      imgUrl = film.poster_path;
      return `<li class="col-12 col-sm-6 col-md-4 col-lg-2">
    <a href="#" class="d-block">
      <img src="${URL_POSTER}${imgUrl}" alt="">
    </a>
  </li>`;
    })
    .join('');
  movies.innerHTML = newData;
}

render();
