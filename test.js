const obj = {
    articles :{
        data : '0'
    },
    news :{
        data: '1'
    }
}


console.log({...obj, news : {data:3} })