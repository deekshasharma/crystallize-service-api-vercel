import searchThisProduct from '../../../src/services/crystallize/products/search-product';
import cors from "../../../lib/cors";

async function searchProduct(req, res) {
  const response = await searchThisProduct({ query: req.body.query, variables: req.body.variables });
  if(response.errors) return res.status(500).send("error");
  else return res.json(response)
}

export default cors(searchProduct);
