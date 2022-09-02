
const loadCategory = () =>{
 fetch('https://openapi.programming-hero.com/api/news/categories')
 .then(res => res.json())
 .then(data => displayCategory(data.data.news_category))
}

const displayCategory = category =>{
 const categories = document.getElementById('category-container');
 category.forEach(element => {
  const categoryLi = document.createElement('li');
  categoryLi.classList.add('nav-item');
  categoryLi.innerHTML = `
  <a class="nav-link active" aria-current="page">${element.category_name}</a>
  
  `;
  categories.appendChild(categoryLi)
 });

}


loadCategory()

