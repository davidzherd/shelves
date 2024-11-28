import { formatDate } from "../assets/siteConfig";

// Create new order
export const postNewOrder = async (
  depth,
  length,
  consealed,
  color,
  notes,
  price,
  phone,
  name
) => {
  const request = await fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/orders`,
    {
      method: "POST",
      body: JSON.stringify({
        shelf_length: length,
        shelf_depth: depth,
        shelf_length: length,
        conseeled: consealed,
        color: color,
        notes: notes,
        price: price,
        status: "new",
        date: formatDate(new Date()),
        phone_number: phone,
        name: name,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const rawData = await request.json();
  return rawData;
};

//Get current data
export const getData = async () => {
  const request = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/orders"
  );
  const rawData = await request.json();
  console.log(rawData);
  const orders = rawData.orders;
  const total = rawData.total;
  const income = rawData.income.total_income;
  return [orders, total, income];
};

// Update existing order
export const updateOrder = async (
  depth,
  length,
  consealed,
  color,
  notes,
  price,
  phone,
  name,
  date,
  status,
  id
) => {
  const request = await fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/orders/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        orders_id: id,
        shelf_length: length,
        shelf_depth: depth,
        shelf_length: length,
        conseeled: consealed,
        color: color,
        notes: notes,
        price: price,
        status: status,
        date: date,
        phone_number: phone,
        name: name,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const rawData = await request.json();
  return rawData;
};
