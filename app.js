const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
const para = document.querySelector('#para');
const remove = document.querySelector('.remove');

let arr = [];

btn.addEventListener('click', function(){
  
  if(text.value === ''){
    alert('Ievadiet tekstu');
  } else {
    pushArr(text.value);
  }


  text.value = '';
  // console.log(arr);
  showArr();
})



function pushArr(){
  
  arr.push(text.value);
}

function showArr(){

  let html = '';

  

  arr.forEach(function(note){
    html += `<li>${note}</li>`;
  });

  para.innerHTML = html;
  
}

function removeNote(){
  arr.pop();
}

remove.addEventListener('click', function(){
  
  console.log('hello');

  removeNote();
  
  showArr();
})


