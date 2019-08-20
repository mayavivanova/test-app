
const quickSort = (arr: any): string[] => {
    
    if (arr.length <= 1) { 
        return arr;
        
	} else {

		let left = [];
		let right = [];
		let newArr: string[] = [];
		const pivot = arr.pop();

		for (let i = 0; i < arr.length; i++) {
            if (arr[i] === null || arr[i].toString().localeCompare(pivot.toString()) <= 0) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }		
        }
        
		return newArr.concat(quickSort(left), pivot, quickSort(right));
	}
}

export default quickSort