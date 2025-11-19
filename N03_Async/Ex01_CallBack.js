let product;
let price;

goMart()
pickDrink(pay)

function goMart(){
    console.log(`마트에 가서 어떤 음료를 살지 고민한다.`)
}

function pickDrink(callback){
    setTimeout(function(){
        console.log(`고민 끝!`)
        product = `제로 콜라`
        price = 2000
        callback(product, price)
    }, 3000)
}

function pay(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`)
}

// 하나의 함수가 종료될 때 바로 실행되는 함수이다.
// 단점: 콜백 지옥!