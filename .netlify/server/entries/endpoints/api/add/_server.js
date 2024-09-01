import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const { a, b } = await request.json();
  return json(a + b + 100);
}
export {
  POST
};
