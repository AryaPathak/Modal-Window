const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnColseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const open = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const close = function (){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for(let i=0;i<btnsOpenModal.length;i++){
  (btnsOpenModal[i].addEventListener('click', open));
}

btnColseModal.addEventListener('click', close);

overlay.addEventListener('click', close);


document.addEventListener('keydown', function(e){
  if(e.key=='Escape' && !modal.classList.contains('hidden')){
    close();
  }
});



// Chages have been made...
