const quickSort = (arr: any, key: string): any => {
    if (arr.length <= 1) {   
        return arr;
    }  else {
		let left = [];
		let right = [];
        let newArr: string[] = [];
        let pivot = arr.pop();
        pivot[key] !== null ? arr[key].pop().toString() :  arr[key].pop()

            for (let i = 0; i < arr.length; i++) {
                

                if(isNaN(arr[i][key])) {
                    if(arr[i][key] === null || arr[i][key].toString().localeCompare(pivot[key]) <= 0) {
                        left.push(arr[i]);
                    } else {
                        right.push(arr[i]);
                    }
                } else {
                    arr[i][key] <= pivot[key] ? left.push(arr[i]) : right.push(arr[i]);
                }
            }
        return newArr.concat(quickSort(left, key), pivot, quickSort(right, key));
	}
}

export default quickSort