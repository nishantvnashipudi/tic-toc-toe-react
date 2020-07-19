export function findWinner(boxes) {
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < rows.length; i++){
        let [a, b, c] = rows[i];
        if(boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]){
            return boxes[a];
        } 
    }return null;
}
export function isAllBoxesAreFilled(boxes){
    if(boxes.some(ele => ele === null)){
        return false;
    } return true;
}