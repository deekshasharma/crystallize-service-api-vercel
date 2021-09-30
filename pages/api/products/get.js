import getThisProduct from '../../../src/services/crystallize/products/get-product';
import cors from "../../../lib/cors";

async function getProduct(req, res) {
  const response = await getThisProduct({ query: req.body.query, variables: req.body.variables });
  if(response.errors) return res.status(500).send("error");
  else return res.json(response)
}

export default cors(getProduct);
