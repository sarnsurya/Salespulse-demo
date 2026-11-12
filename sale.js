const order = [
  {
    orderId: "ORD001",
    product: "Keyboard",
    quantity: 2,
    unitPrice: 750,
    unitCost: 500,
  },
  {
    orderId: "ORD002",
    product: "Mouse",
    quantity: 3,
    unitPrice: 400,
    unitCost: 220,
  },
  {
    orderId: "ORD003",
    product: "Monitor",
    quantity: 1,
    unitPrice: 8500,
    unitCost: 6900,
  },
  {
    orderId: "ORD004",
    product: "Keyboard",
    quantity: 1,
    unitPrice: 750,
    unitCost: 500,
  },
  {
    orderId: "ORD005",
    product: "Laptop Stand",
    quantity: 2,
    unitPrice: 1200,
    unitCost: 800,
  },
  {
    orderId: "ORD006",
    product: "Mouse",
    quantity: 0,
    unitPrice: 400,
    unitCost: 220,
  },
  {
    orderId: "ORD007",
    product: "Monitor",
    quantity: 1,
    unitPrice: -8500,
    unitCost: 6900,
  },
  {
    orderId: "ORD008",
    product: "Webcam",
    quantity: 2,
    unitPrice: 1800,
    unitCost: 1200,
  },
];

function orderTotal(order) {
  return order.quantity * order.unitPrice;
}

function totalRevenue(orderList) {
  return orderList.reduce((total, order) => total + orderTotal(order));
}

console.log("Total Revenue", totalRevenue(order));
