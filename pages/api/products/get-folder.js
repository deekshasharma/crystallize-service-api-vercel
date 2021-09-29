import queryThisFolder from '../../../src/services/crystallize/products/get-folder';

export default async function getFolder(req, res) {
  const response = await queryThisFolder({ query: req.body.query, variables: req.body.variables });
  if(response.errors) return res.status(500).send("error");
  else return res.json(response)
}
