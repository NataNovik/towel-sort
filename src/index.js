// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = []

    if (!matrix) {
        return [];
    }

    matrix.forEach((el, index) => {
        if (index % 2 !== 0) {
            result = result.concat(el.reverse())
        } else {
            result = result.concat(el)
        }
    })

    return result
}
