function *gen() {
    let i = 0;
    while (true){
      yield i++;
    }
   }

   const me = gen()

   let l = 0;
   function sequence() {
       const arr = ['me', 'you', 'us', 'all']
       const res = arr[l]
       l++
       if (l > 3) {
           l = 0
       }


       return res
   }

   console.log(sequence())
   console.log(sequence())
   console.log(sequence())
   console.log(sequence())
   console.log(sequence())
   console.log(sequence())
   console.log(sequence())
   console.log(sequence())
   console.log(sequence())
