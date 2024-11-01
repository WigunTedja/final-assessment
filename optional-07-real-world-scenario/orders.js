// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((accumulator, current) => accumulator + current.price,0)
  const order = {id : generateUniqueId(), customerName: customerName, items: items, totalPrice : totalPrice, status : 'Menunggu'}
  orders.push(order)
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  let order = orders.find((order) => order.id === orderId) 
    if (order) {
  order.status = status;
}
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const revenue = orders.filter((order) => order.status === 'Selesai')
                        .reduce((accumulator, current) => accumulator + current.totalPrice, 0);

  return revenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  if(index >= 0){
      orders.splice(index,1)}
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
