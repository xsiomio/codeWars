function XO(str) {
    str = str.toLowerCase();
    let sumX = 0;
    let sumO = 0;
    let posX = 0;
    let posO = 0;
    while (true) {
        let foundX = str.indexOf("x", posX);
        if (foundX == -1)
            break;
        sumX++;
        posX = foundX + 1;
    }
    while (true) {
        let foundO = str.indexOf("o", posO);
        if (foundO == -1)
            break;
        sumO++;
        posO = foundO + 1;
    }
    if (str.length === 0) {
        return true;
    } else if ((sumX === 0 || sumO === 0)) {
        return false;
    } else if (sumO === sumX) {
        return true;
    } else {
        return false;
    }
}
