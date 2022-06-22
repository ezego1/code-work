class y {
    x: number;
    y: number;
}

interface P extends y {
    z: number;
}

const me = [1, 2];
me[0] = 100
me[2] = 20
console.log(me)