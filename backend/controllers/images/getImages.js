const connection = require("../../db");

const getImages = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    return next();
  }
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT images.image_id,images.title,images.url,products.title as product,categories.title as category FROM images LEFT JOIN categories on images.category_id = categories.category_id LEFT JOIN products ON images.product_id = products.product_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getImages;
