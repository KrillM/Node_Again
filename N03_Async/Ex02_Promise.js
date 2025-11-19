function promise1(flag){
    return new Promise(function (resolve, reject){
        if(flag) {
            resolve(`promise 상태는 fulfilled!! then으로 연결됩니다.\n이때의 flag는 true입니다.`)
        }
        else {
            reject(`promise 상태는 rejected!! catch으로 연결됩니다.\n이때의 flag는 false입니다.`)
        }
    })
}

// 성공
promise1(true)
.then(function(result){
    console.log(result)
})
.catch(function(err){
    console.log(err)
})

// 실패
promise1(false)
.then(function(result){
    console.log(result)
})
.catch(function(err){
    console.log(err)
})