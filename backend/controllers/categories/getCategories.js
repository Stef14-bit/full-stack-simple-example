const connection = require("../../db");

const getCategories = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT cat.category_id,cat.title,images.url AS image FROM categories AS cat join images on cat.image_id= images.image_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getCategories;
