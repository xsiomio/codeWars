function rentalCarCost(d) {
    let price = 40
    if (d>=7){
        return (d*price)-50;
    }
    else if (d>=3){
        return (d*price)-20;
    }
    else{
        return d*price
    }
  }