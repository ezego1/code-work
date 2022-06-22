const array = [9, 10]

console.log(array[array.length - 1])
console.log(array[array.length - 2])


var generateParenthesis = function(n) {
    const addParanthesis = (cur, open, close) => {
      if (cur.length === n * 2) {
        res.push(cur);
        return;
      }
      if (open < n) { addParanthesis(cur + '(', open + 1, close); }
      if (close < open) { addParanthesis(cur + ')', open, close + 1); }
    };
    const res = [];
    addParanthesis('', 0, 0);
    return res;
  };

  console.log(generateParenthesis(4))

  console.log(Number('10') - 10 == 0)

  const u = [1, 'a', {x:1}, {y:2}]
u[-1] = -1
  console.log(u.indexOf({x:1}))


  int maxDepth(Node root) 
  { 
      if (root == null) 
          return 0; 

  // Recursively find the depth of each subtree.
  int leftDepth = maxDepth(root.left); 
  int rightDepth = maxDepth(root.right); 

  // Get the larger depth and add 1 to it to
  // account for the root.
  if (leftDepth > rightDepth) 
    return (leftDepth + 1); 
  else
    return (rightDepth + 1); 
  } 