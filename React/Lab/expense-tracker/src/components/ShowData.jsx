import { useEffect, useState } from "react"; 
import {getDataFromServer} from '../services/menu'
function ShowData() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getDataFromServer();
      setItems(data);
    }
    fetchMenu();
  });


  return (
    <div className="">
      <h1>Show Data Page</h1>
      {items.map((each) => (
        <li>{each.payeeName}</li>
      ))}
    </div>
  );
}

export default ShowData;
