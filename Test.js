function closestNumbers(numbers) {
    // Write your code here
    numbers.sort((a, b) => a - b)
    
    let highest = numbers[1] - numbers[0];
    let highestPairs = [numbers[0], numbers[1]];
    
    for(let i = 2; i < numbers.length; i++) {
        let before = numbers[i - 1];
        let next = numbers[i]
        let diff = next - before;
        
        if (diff < highest) {
            highest = diff;
            highestPairs = [before, next];
        }else if(diff === highest) {
            highestPairs = highestPairs.concat([before, next])
        }
    }
    
    
    while(highestPairs.length > 0) {
     
        console.log(highestPairs.splice(0, 2).join(' '))
    

    }
}