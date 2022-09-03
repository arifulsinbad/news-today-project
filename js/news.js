
const loadCategory = () =>{
 fetch('https://openapi.programming-hero.com/api/news/categories')
 .then(res => res.json())
 .then(data => displayCategory(data.data.news_category))
}




