const db = require("../db/db");

exports.storeProducts = async (products) => {
  return new Promise((resolve, reject) => {
    const insertQuery =
      "INSERT INTO products (name, price, availability) VALUES ?";
    const values = products.map((product) => [
      product.name,
      product.price,
      product.availability,
    ]);
    db.query(insertQuery, [values], (err, result) => {
      if (err) {
        console.error("Error executing query: ", err);
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

exports.listProducts = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (err, results) => {
      if (err) {
        console.error("Error executing query: ", err);
        reject(err);
        return;
      }
      const transformedResults = results.map((product) => ({
        name: product.name,
        price: product.price,
        availability: product.availability === 1 ? true : false,
      }));
      resolve(transformedResults);
    });
  });
};
