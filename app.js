// DOM Manipulation

const button = document.querySelector('.btn');
button.addEventListener('click',addtask());


function addtask()
{
  const val = document.querySelector('.inp');
  if(val.value!=""){
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = val.value;
  val.value = "";
  const count = document.querySelectorAll('li').length;
  const p = document.querySelector('p');
  p.innerHTML=`Number of Pending tasks are ${count}`;

  }
}
function removetask()
{
  const ul = document.querySelector('ul');
  const p = document.querySelector('p');
  console.log(ul.childNodes);
  ul.firstElementChild.remove();
  const len = ul.children.length;
  p.innerHTML=`Number of Pending tasks are ${len}`;
}




