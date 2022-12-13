const connection = require("../../db");

const getCategoryById = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT cat.category_id,cat.title,images.url AS image FROM categories AS cat join images on cat.image_id= images.image_id WHERE cat.category_id=?";
  const { id } = req.params;
  connection
    .promise()
    .query(query, [id])
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};

module.exports = getCategoryById;
