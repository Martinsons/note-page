const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
const para = document.querySelector('#para');
const remove = document.querySelector('.remove');

// let arr = [];

// btn.addEventListener('click', function(){
  
//   if(text.value === ''){
//     alert('Ievadiet tekstu');
//   } else {
//     pushArr(text.value);
//   }


//   text.value = '';

//   showArr();

// })



// function pushArr(){
  
//   arr.push(text.value);

// }

// function showArr(){

//   let html = '';

  

//   arr.forEach(function(note){
//     html += `<li>${note}</li>`;
//   });

//   para.innerHTML = html;
  

  
// }

// function removeNote(){
//   arr.pop();
// }

// remove.addEventListener('click', function(){
  
//   console.log('hello');

//   removeNote();
  
//   showArr();
// })


btn.addEventListener('click', addTodo);
para.addEventListener('click', removeTodo);

function addTodo(){
  const liElement = document.createElement('li');
  liElement.innerText = text.value;
  para.appendChild(liElement);
  text.value = '';
  
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('removeBtn');
  removeBtn.innerText = 'Remove';
  liElement.appendChild(removeBtn);

}


function removeTodo(e){
  
  const item = e.target;
  let liElement;

  if(item.classList[0] === 'removeBtn'){
    para.remove(liElement);
    console.log('teksts');
  
  }

  
}
