async function charge(value) {
  // Aqui seria chamada uma API externa real (Stripe, PayPal, etc.)
  return {
    transactionId: Math.floor(Math.random() * 10000),
    status: "paid",
    amount: value,
    date: new Date(),
  };
}

export default { charge };
