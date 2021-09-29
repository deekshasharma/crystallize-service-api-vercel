import getThisProduct from '../../../src/services/crystallize/products/get-products';

export default async function getAllProducts(req, res) {
  const response = await getThisProduct({ query: req.body.query, variables: req.body.variables });
  if(response.errors) return res.status(500).send("error");
  else return res.json(response)
}
