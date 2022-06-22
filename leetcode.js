function findSubstring(s, words) {
    
    const output = []
    
    const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m.join(''))
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
  }
    
    const perm = permutator(words)
    
    if (perm.length > 1) {
        for(let key of perm) {
            if(s.indexOf(key) !== -1) {
                output.push(s.indexOf(key))
            }
            
        }
    }
    
    return output
    
};

console.log( findSubstring("barfoofoobarthefoobarman" ,["bar","foo","the"]))

