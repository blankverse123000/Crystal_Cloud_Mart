//Fruit Shop
let shop = {
    name: "Crystal Cloud Mart",
    location: "မြေနီကုန်း",
    items: {
        fruits: [
            {
                id: 1,
                kind: "Apple",
                price: 500
            },
            {
                id: 2,
                kind: "Orange",
                price: 400
            },
            {
                id: 3,
                kind: "Mango",
                price: 1000
            },
            {
                id: 4,
                kind: "Strawberry",
                price: 800
            },
            {
                id: 5,
                kind: "Leamon",
                price: 700
            }
        ],
        drinks: [
            {
                id: 1,
                kind: "ABC",
                price: 2000
            },
            {
                id: 2,
                kind: "Henical",
                price: 1800
            },
            {
                id: 3,
                kind: "Chang",
                price: 1700
            },
            {
                id: 4,
                kind: "YoMa",
                price: 1600
            },
            {
                id: 5,
                kind: "Tiger",
                price: 1800
            }
        ],
        foods__အမြည်း: [
            {
                id: 1,
                kind: "ကြက်ကုန်းဘောင်",
                price: 2000
            },
            {
                id: 2,
                kind: "ကြက်သားလုံးကြော်",
                price: 1800
            },
            {
                id: 3,
                kind: "အာလူးကြော်",
                price: 1500
            },
            {
                id: 4,
                kind: "ဝက်ခေါက်ကြော်",
                price: 1000
            },
            {
                id: 5,
                kind: "ဘူသီးကြော်",
                price: 1600
            }
        ]
    }

};




let mart = document.querySelector('h1');
mart.textContent = shop.name;

let ol = document.querySelector('ol');
let input = document.querySelector('.input');
let btnSub = document.querySelector('.submit');
let itemList = document.getElementById('itemList');
let fruitList = document.getElementById('fruitList');
let drinkList = document.getElementById('drinkList');


for (let item in shop.items) {
    itemList.innerHTML += `
    <li class="list-group-item">${item}</li>
    `;
}

input.focus();

function display(current) {

    fruitList.classList.add('hidden');
    drinkList.classList.add('hidden');
    foodList.classList.add('hidden');
    itemList.classList.add('hidden');
    current.classList.remove('hidden');
    document.getElementById('form').classList.remove('hidden');
    input.focus();
    input.value = '';
}
display(itemList);

// Order Button မှာယူခြင်း
function order() {
    //fruits conditinal Statement
    if (input.value == "fruit" || input.value == "fruits" || input.value == "Fruits" || input.value == "Fruits") {
        display(fruitList);
        forLoop(shop.items.fruits, fruitList, 'ယနေ့ရရှိနိုင်သော သစ်သီးများ');
        having(fruitList, shop.items.fruits);

    }
    //Drinks conditional Statement
    else if (input.value == "drinks" || input.value == "drink" || input.value == "Drinks" || input.value == "Drink") {
        forLoop(shop.items.drinks, drinkList, 'ယနေ့ရရှိနိုင်သော ဘီယာများ');
        display(drinkList);
        having(drinkList, shop.items.drinks);

    }
    //food အမြည်း conditional Statement
    else if (input.value == "food" || input.value == "foods" || input.value == "အမြည်း" || input.value == 'foods__အမြည်း') {
        forLoop(shop.items.foods__အမြည်း, foodList, 'ယနေ့ရရှိနိုင်သော အမြည်းများ');
        display(foodList);
        having(foodList, shop.items.foods__အမြည်း);
    }
    //မှားရင် ဒါပြန်ပြ
    else {
        display(itemList);
    }
};

// button and Enter Click
btnSub.onclick = order;
input.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') order();
});


// For loop Function for arrays of objects in items
function forLoop(choose, list, title) {
    // list.classList.remove('hidden');
    list.innerHTML = title;
    for (let i = 0; i < choose.length; i++) {
        let letter = `${choose[i].id}.${choose[i].kind} :: ${choose[i].price} MMK `
        list.innerHTML += `
        <li class="list-group-item">${letter}</li>`;
        input.value = '';
        input.focus();
    }
};

//  next input adding & last input remove
function having(list, item) {
    list.innerHTML += `
        <li class="list-group-item">6.Home :: မူလ Menuသို့</li>`;
    list.innerHTML += `
    <span id="requirer" class="input-group-text bg-danger hidden" id="basic-addon2">Full All Blanks</span>
<div class="input-group mb-3">
  <input type="text" id="number" class="form-control" placeholder="Enter Number" aria-describedby="basic-addon2">
 <input type="text" id="amount" class="form-control" placeholder="Enter amount" aria-describedby="basic-addon2">
  <button class="input-group-text bg-info" id="but">ordre Now</button>
</div>`;

    document.getElementById('form').classList.add('hidden');
    let input = document.querySelector('input');
    input.focus();
    let btn = document.getElementById("but");
    let Btnamount = document.getElementById("amount");

    btn.onclick = () => {
        idCheck(item);
    }


    input.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            Btnamount.focus();
            Btnamount.addEventListener('keypress', (e) => {
                if (e.key == "Enter") idCheck(item)
            })
        }
    });


};


// Choosing and idCheck

function idCheck(name) {
    let requirer = document.getElementById('requirer');
    let num = document.getElementById('number').value;
    let amm = document.getElementById("amount").value;
    if (num == '' || amm == '') {
        requirer.classList.remove('hidden');
    } else {
        requirer.classList.add('hidden');
        let voucher = document.getElementById('voucher');
        switch (Number(num)) {
            case 1:
                count(voucher, name, num);
                break;
            case 2:
                count(voucher, name, num);
                break;
            case 3: count(voucher, name, num); break;
            case 4: count(voucher, name, num); break;
            case 5: count(voucher, name, num); break;
            case 6: display(itemList); break;
            default: console.log("wrong");

        }

    }


}

// အရေအတွက် ဘာညာ voucher

function count(voucher, name, id) {
    document.querySelector('.container').classList.add('hidden');
    let ind = Number(id) - 1;
    let amount = document.getElementById('amount').value;
    let total = name[ind].price * Number(amount);
    voucher.classList.remove('hidden');
    voucher.innerHTML += `<tr>
    <td>1.</td>
    <td>${name[ind].kind}</td>
    <td>${amount}</td>
    <td> ${total}MMK</td>
</tr> 
<span class="thank text-center float-end">ကျေးဇူးအထူးတင်ရှိပါသည် &#128151 </span>`;

}





