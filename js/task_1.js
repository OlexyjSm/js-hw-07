// # Завдання 1

// Розстав відсутні `this` в методах об'єкта `account`.

const account = {
    owner: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["order-1", "order-2", "order-3"],
    changeDiscount(value) {
      this.discount = value; // Added 'this' before 'discount'
    },
    showOrders() {
      return this.orders; // Added 'this' before 'orders'
    },
    addOrder(cost, order) {
      this.balance -= cost; // Added 'this' before 'balance'
      this.orders.push(order); // Added 'this' before 'orders'
    },
  };
  
  account.changeDiscount(0.15);
  console.log(account.discount); // 0.15
  
  console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
  account.addOrder(5000, "order-4");
  console.log(account.balance); // 19000
  console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
  