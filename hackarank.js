function plusMinus(arr) {
    const lenght = arr.length;
    const hash = {}

    for (let key of arr) {

        if(key < 0) {
            if(hash.hasOwnProperty('minus')) {
            hash['minus'] ++
            }else {
                hash['minus'] = 1
            }
        }else if (key === 0) {
            if(hash.hasOwnProperty('zero')) {
                hash['zero'] ++
                }else {
                    hash['zero'] = 1
                }
        }else if(key > 0){
            if(hash.hasOwnProperty('plus')) {
                hash['plus'] ++
                }else {
                    hash['plus'] = 1
                }
        }
            
    }

    console.log(hash)

    for(let key in hash) {
       (hash[key]/lenght).toFixed(6)
    }
}

plusMinus([-4, 3, -9, 0, 4, 1])