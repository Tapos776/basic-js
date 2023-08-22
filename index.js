let total = 0;
function productCard(textInput) {
  const product = textInput.parentNode.childNodes[1].innerText;
  const cardValue = textInput.parentNode.childNodes[5].innerText.split(" ")[0];

  const create = document.getElementById('tag');
  const p =document.createElement('p');
  const count =create.childElementCount ;
  p.innerHTML =`${ count + 1 }. ${product}`
  create.appendChild(p)


  const totalTk = document.getElementById('totalTk');
  const cardValueNum = parseFloat(cardValue);
  total = total + cardValueNum;
  totalTk.innerText = total.toFixed(2);
  const cong = document.getElementById('cong');

  if (total > 0) {
    cong.removeAttribute('disabled');
  }
const item =document.getElementById('item');
item.innerText =count + 1;
const items =document.getElementById('items');
items.innerText =count + 1;

}

function applyDiscount() {
  const discountTk = document.getElementById('discountTk');
  const discount = total * 0.3;
  discountTk.innerText = discount.toFixed(2);
  const totalAmount = document.getElementById('totalAmount');
  const totalDiscount = total - discount;
  totalAmount.innerText = totalDiscount.toFixed(2);

  const subtotal = document.getElementById('subtotal');
  subtotal.innerText =totalDiscount

}

document.getElementById('home').addEventListener('click', function () {
  location.reload();
})

document.getElementById('inputT').addEventListener('keyup',function(event){
  const textValue =event.target.value ;
  const apply =document.getElementById('apply');
  if(total >=1000 &&  textValue === 'SELL1000'){
    apply.removeAttribute('disabled');
  }else{
    apply.setAttribute('disabled',true);
  }
})