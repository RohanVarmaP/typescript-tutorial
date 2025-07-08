type menuType = { name: string, price: number }

type orderStatusType = 'ordered' | 'completed'

type orderType = { id: number, pizza: menuType, status: orderStatusType }

const menu: menuType[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]
let cashInRegister: number = 100
let nextOrderId: number = 1
const orderQueue: orderType[] = []

function addNewPizza(pizzaObj: menuType) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    if (!pizzaName) {
        console.error("Pizza name is required.")
        return null;
    }
    const selectedPizza: menuType | undefined = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error("Pizza not found.")
        return null;
    }
    cashInRegister += selectedPizza.price
    const newOrder: orderType = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order: orderType | undefined = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error("Order not found.")
        return null;
    }
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
