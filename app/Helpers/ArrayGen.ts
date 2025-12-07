export const randomArrayGen = () => {
    let arr = [];
    for(let i = 0; i < 100; i ++){
        arr.push(Math.floor(Math.random() * 50) + 30);
    }
    return arr;
}