const arr1 = [1,2,3,5];
const arr2 = [9,1,4,5];

testFunc(arr1,arr2);
validAnagram('anagram', 'nagaram');
sumZero([-2,0,1,3])
countUniq([1,1,1,2,2,3,3,4,4,5,6])

function testFunc(a,b) {
    let x = true;
    if(a.length !== b.length) return false;

    let a1 = {};

    for(let val of a) {
        let temp = val*val;
        a1[temp] = true;
    }

    for(let val of b) {
        if(!(val in a1)) {
            x = false;
        }
    }

}

function validAnagram(a,b) {
    let x = true;
    if(a.length !== b.length) return false;
    if(a === '' && b === '') return true;
    let a1 = {};

    for(let val of a) {
        a1[val] = (a1[val] || 0) + 1;
    }
    for(let val of b) {
        if(val in a1) {
            a1[val]--;
        } else {
            x = false;
        }
    }
    
}

function sumZero(arr) {
    let x = false;
    if(arr.length === 0) return false;

    let i = 0,j = arr.length-1;

    while(i !== j) {
        if(arr[i] + arr[j] > 0) {
            j--;
        } else if(arr[i] + arr[j] < 0) {
            i++;
        } else if(arr[i] + arr[j] === 0) {
            x = true;
        }
    }
    
}

function countUniq(arr) {
    //[1,1,1,2,2,3,3,4,4,5,6]
    if(arr.length === 0) return 0;
    if(arr.length === 1) return 1;

    let i = 0, j = 1;
    while(j !== arr.length) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
            j++
        } else {
            j++;
        }
    } 

    console.log(i+1);
}