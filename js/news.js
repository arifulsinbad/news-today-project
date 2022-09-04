
const loadCategory = () =>{
 fetch(`https://openapi.programming-hero.com/api/news/categories/`)
 .then(res => res.json())
 .then(data => displayCategory(data.data.news_category))
 .catch(error => console.log(error))
}


const displayCategory = category =>{
 const categories = document.getElementById('category-container');
 category.forEach(element => {
  
  const categoryLi = document.createElement('li');
  categoryLi.classList.add('nav-item');
  categoryLi.innerHTML = `
  <a onclick ="categoryId('${element.category_id}'), loaderItem(true), loadCategory1('${element.category_name}')" class="nav-link active" aria-current="page">${element.category_name}</a>
  
  `;
  categories.appendChild(categoryLi);
 });

}


const categoryId = Id =>{
 fetch(`https://openapi.programming-hero.com/api/news/category/${Id}`)
 .then(res => res.json())
 .then(data => displayId(data.data))
 .catch(error => console.log(error))

}
const displayId1 = (a, b)=>{
  return b.total_view - a.total_view
}


const displayId = dataId =>{
  
  // console.log(dataId.sort(displayId1))
const idData = dataId.sort(displayId1)
//  console.log(idData)
// loadCategory(idData[0])
 const mainField = document.getElementById('main-field');
 mainField.innerHTML = '';
 idData.forEach((idField) => {
// console.log(idField.category_id)
// loadId(idField)

const mainDiv = document.createElement('div');

mainDiv.innerHTML = `
<div  class="card mb-3 " style="width: 100%;">
 <div class="d-flex h">
 
 <div class="row g-0 ">
 <div class="col-md-3 my-2  mx">
   <img src="${idField.thumbnail_url}" class="img-fluid rounded-start imageField " alt="...">
 </div>
 <div class="col-md-8">
   <div class="card-body">
     <h5 class="card-title">${idField.title}</h5>
     <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the
     best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-
     up.</P>
     <p class="card-text">${idField.details.slice(0, 200) }...</p>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
     <div class="d-flex justify-content-between align-items-center g-5 width">
    
    <div class="d-flex">
    <img src="${idField.author.img}" alt=""><br>
    <span  class="author">
    <b>${idField.author.name ? idField.author.name: 'not found'}</b>
    <p>${idField.author ? idField.author.published_date: 'not found'}</p>
    </span>
    </div>
     <b class="">${idField.total_view ? idField.total_view : 'not found'} views</b>
  <div onclick="detailsBtn('${idField._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</div>
    </div>
   </div>
 </div>
</div>
</div>
 </div>
`;
mainField.appendChild(mainDiv);
})
// demo(dataId)
document.getElementById('demo').innerText =`${dataId.length ? dataId.length : 'no founded'}`;

loaderItem(false);
}


const loaderItem = loader =>{
  const loaderField = document.getElementById('loader');
  if(loader){
    loaderField.classList.remove('d-none')
  }
  else{
    loaderField.classList.add('d-none')
  }
}

const detailsBtn = details =>{
 fetch(`https://openapi.programming-hero.com/api/news/${details}`)
 .then(res => res.json())
 .then(data => displayDetails(data.data))
 .catch(error => console.log(error))
}
const displayDetails = detailId =>{
console.log(detailId)
document.getElementById('exampleModalLabel').innerText =detailId[0].title;
detailId.forEach(idDetail =>{
  const modalField = document.getElementById('modalField');
  modalField.innerHTML = `

  <img src="${idDetail.thumbnail_url}" class="img-fluid rounded-start w-100" alt="...">
  <p class="card-text">${idDetail.details}</p>
  
  <div class="d-flex justify-content-between align-items-center g-5 width">
    
  <div class="d-flex">
  <img src="${idDetail.author.img}" alt=""><br>
  <span  class="">
  <b>${idDetail.author.name ? idDetail.author.name: 'not found'}</b>
  <p>${idDetail.author ? idDetail.author.published_date: 'not found'}</p>
  </span>
  </div>
   <b class="">${idDetail.total_view ? idDetail.total_view : 'not found'} views</b>

  </div>
 
  
  `;
})
}

const loadCategory1 = names =>{
  document.getElementById('demo2').innerText =names;
}






loadCategory()

