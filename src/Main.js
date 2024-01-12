import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

function Main() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((outcome) => {
        // console.log(res.data);
        setitems(outcome.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map(({ idCategory, strCategory, strCategoryThumb, strCategoryDescription }) => {
    return (
      <section className="card">
        <img src={strCategoryThumb} />
        <section className="content">
          <p>{idCategory}</p>
          <p>#{strCategory}</p>
        </section>
       </section>
    );
  });

  return (
    <>
  <h1 className="title">Meal Categories</h1>
  <div className="items-container">{itemslist}</div>;
  </>
  )
}

export default Main;
