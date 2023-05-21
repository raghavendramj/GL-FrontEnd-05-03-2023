import { useEffect, useState } from "react";
import { getDataFromServer } from '../services/menu'
function ShowData() {
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState();
  const [rahul, setRahul] = useState();
  const [ramesh, setRamesh] = useState();

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getDataFromServer();
      setItems(data);
      const reduceFunc = (result, v) => {
        return result = result + v.price
      }

      setSum(data.reduce(reduceFunc, 0));
      fetchShares(data);
    }
    fetchMenu();
    
  });

  const fetchShares = (data) => {

    let a = 0, b = 0;
    console.log(data);
    for (let eachObj of data) {
      
      if (eachObj.payeeName === 'Rahul') {
        a += eachObj.price;
      } else {
        b += eachObj.price;
      }
    }
    setRahul(a);
    setRamesh(b);
  }

  return (
    <div className="">
      <h1>Show Data Page</h1>
      {items.map((each) => (
        <li>{each.payeeName}</li>
      ))}
      <h1>Rahul :- {rahul}</h1>
      <h1>Ramesh :- {ramesh}</h1>
      <h1>Sum :- {sum}</h1>

    </div>
  );
}

export default ShowData;
