module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix && matrix.length >0) {
        for (let i=0; i<matrix.length; i+=1) {
            i%2===0? result.push(matrix[i]) :result.push(matrix[i].reverse())
        }
        let finalResult = result.toString().split(',');
        return finalResult
    } else {
        return [];
    }
}
