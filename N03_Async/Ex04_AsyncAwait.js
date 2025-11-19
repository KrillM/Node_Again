let product;
let price;

function goMart(){
    console.log(`마트에 가서 어떤 음료를 살지 고민한다.`)
}

function pickDrink(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        console.log(`고민 끝!`)
        product = `제로 콜라`
        price = 2000
        resolve();
    }, 3000)
    })
}

function pay(){
    console.log(`상품명: ${product}, 가격: ${price}`)
}

// 실행
async function exec(){
    goMart()
    await pickDrink()
    pay()
}

exec();