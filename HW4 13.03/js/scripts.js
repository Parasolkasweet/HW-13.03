// Написать самостоятельно сортировку слиянием.
// Написать merge sort, которая будет сортировать массив в порядке убывания значения элементов.  array1 = [100, 12, 1256, 55589, 701, 5 ,0];
function mergeSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeDescending(mergeSortDescending(left), mergeSortDescending(right));
}

function mergeDescending(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


let array1 = [100, 12, 1256, 55589, 701, 5, 0];


let sortedArray = mergeSortDescending(array1);
console.log(sortedArray); 