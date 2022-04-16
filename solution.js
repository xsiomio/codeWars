function solution(str) {
    let trs = "";
    for (let i = (str.length - 1); i >= 0; i--) {
        trs += str[i];
    }
    return trs;
}
