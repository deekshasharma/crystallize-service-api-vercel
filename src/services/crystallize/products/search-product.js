const fetch = require("node-fetch");
const { safePathQuery } = require("../utils");

const CRYSTALLIZE_TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER;
const CRYSTALLIZE_PUBLIC_API_URL = process.env.CRYSTALLIZE_PUBLIC_API_URL;
const CRYSTALLIZE_ACCESS_TOKEN_ID = process.env.CRYSTALLIZE_ACCESS_TOKEN_ID;
const CRYSTALLIZE_ACCESS_TOKEN_SECRET =
  process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET;

module.exports = async function searchThisProduct({ query, variables }) {
  const body = JSON.stringify(safePathQuery({ query, variables }));
  const response = await fetch(`${CRYSTALLIZE_PUBLIC_API_URL}/${CRYSTALLIZE_TENANT_IDENTIFIER}/search`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      "X-Crystallize-Access-Token-Id": CRYSTALLIZE_ACCESS_TOKEN_ID,
      "X-Crystallize-Access-Token-Secret": CRYSTALLIZE_ACCESS_TOKEN_SECRET,
    },
    body
  });
  console.log("response from server", JSON.stringify(response));
  return await response.json();
};