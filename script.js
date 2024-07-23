fetch('/data.json').then((request) => {
    if(!request.ok){
        console.log('failed to retrieve resource');
        return null;
    }

    return request.json()
}).then((data) => {
    console.log(data)
})