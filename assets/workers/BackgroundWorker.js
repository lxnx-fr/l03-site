//workerVite.js
const countSum= (n)=>{
    let sum = 0;
    for(let i =1; i <= n; i++){
        sum += i;
    }
    return sum
}

const random = (min, max) => {
    return Math.random() * (max - min) + min
}

self.addEventListener('message', function(e) {
    if (e.data.type === 'random') {
        let min = e.data.data.min
        let max = e.data.data.max
        let result = random(min, max)
        self.postMessage(result)
    }
}, false);