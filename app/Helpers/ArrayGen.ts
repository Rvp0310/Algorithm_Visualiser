

export const randomArrayGen = () => {
    let arr = [];
    for(let i = 0; i < 50; i ++){
        arr.push(Math.floor(Math.random() * 400) + 100);
    }
    return arr;
}