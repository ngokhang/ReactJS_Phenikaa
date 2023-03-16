const menus = document.querySelector('.menu');
const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
let dataFood = [];

const render = () => {
  let newDataFood = [...dataFood]
    .map((e) => {
      return `
    <li class="row g-0 border-bottom py-3 border-light-subtle">
      <div class="img col-12 col-sm-3">
        <img src="${e.strMealThumb}" class="d-block rounded" alt="food">
      </div>
      <div class="col-12 col-sm-8 pt-2 pt-sm-0 px-sm-5">
        <a href="#" class="text-light text-decoration-none" style="font-size: 1.5rem">
        ${e.strMeal}
        </a>
      </div>
  </li>`;
    })
    .join('');
  menus.innerHTML = newDataFood;
};

const getDataFood = async () => {
  dataFood = await axios.get(URL).then((res) => res.data.meals);
  render();
};

const initialApp = () => {
  getDataFood();
  render();
};

initialApp();
