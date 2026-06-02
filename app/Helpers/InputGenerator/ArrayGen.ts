export const randomArrayGen = (len: number) => {
    let arr = [];
    for(let i = 0; i < len; i ++){
        arr.push(Math.floor(Math.random() * 50) + 20);
    }
    return arr;
}