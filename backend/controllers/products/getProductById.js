const connection = require("../../db");

const getProductById = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "select products.product_id, products.title, products.price, categories.title AS category,images.url as image from products JOIN categories on categories.category_id = products.category_id JOIN images ON images.image_id = products.image_id WHERE products.product_id=?";
  const { id } = req.params;
  connection
    .promise()
    .query(query, [id])
    .then(([results]) => {
      if (!results.length) {
        res.status(404).send({
          status: "404",
          message: "Not found",
          data: null,
        });
      }
      res.send(results);
    })
    .catch((e) => console.log(e));
};

module.exports = getProductById;
