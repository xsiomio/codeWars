function firstNonConsecutive (arr) {
    let n = 0;
    for (n=0; (arr[n+1] - arr[n]) == 1; n++) {
    }
    if (arr[n+1] == undefined){
        return null
    } else {
        return arr[n+1];}
    }