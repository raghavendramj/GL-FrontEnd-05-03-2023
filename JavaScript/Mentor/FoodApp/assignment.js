
//Q -> Get sum of prices of all paner whose price is > 12
//3 -> map, filter and reduce

function assignment() {
    let pannerFilterPredicate = (item) => item.category === "paneer";
    let priceFilterPredicate = (item) => item.price > 12;
    let pannerItems = foodItem
      .filter(pannerFilterPredicate)
      .filter(priceFilterPredicate);
    console.log("1. After Panner Filter :- ", pannerItems);
  
    let pannerItemGt12Prices = pannerItems.map((item) => item.price);
    console.log("2. After Panner Prices :- ", pannerItemGt12Prices);
  
    let sumCallBack = (accu, curValue) => accu + curValue;
    let sumOfPaneerPricesGt12 = pannerItemGt12Prices.reduce(sumCallBack);
    console.log("3. Sum of Panner Prices :- ", sumOfPaneerPricesGt12);
  }
  
  assignment();
  