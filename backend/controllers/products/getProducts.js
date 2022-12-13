const connection = require("../../db");

const getProducts = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "select products.product_id, products.title, products.price, categories.title AS category,images.url as image from products JOIN categories on categories.category_id = products.category_id JOIN images ON images.image_id = products.image_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getProducts;

// SELECT ... FROM t1 JOIN (t2 JOIN t3 ON ...) ON
