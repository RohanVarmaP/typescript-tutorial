type menuType = { id: number, name: string, price: number }

type updatedMenuType = Partial<menuType>

type orderStatusType = 'ordered' | 'completed'

type orderType = { id: number, pizza: menuType, status: orderStatusType }

let cashInRegister: number = 100
let nextOrderId: number = 1
let nextPizzaId: number = 1
const orderQueue: orderType[] = []

const menu: menuType[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 }
]

function addNewPizza(pizzaObj: Omit<menuType, 'id'>): void {
    const newPizza: menuType = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
}

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray(menu, { id: nextPizzaId, name: "Chicken Bacon Ranch", price: 12 })
addToArray<orderType>(orderQueue, { id: nextOrderId++, pizza: { id: nextPizzaId, name: "BBQ Chicken", price: 12 }, status: "completed" })

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

function placeOrder(pizzaName: string): orderType | null {
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

function completeOrder(orderId: number): orderType | null {
    const order: orderType | undefined = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error("Order not found.")
        return null;
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(detail: string | number): menuType | null {
    if (typeof detail !== 'string' && typeof detail !== 'number') {
        console.error("Detail must be a string or a number.")
        return null;
    }
    let pizza: menuType | undefined;
    if (typeof detail === 'string') {
        pizza = menu.find(pizzaObj => pizzaObj.name.toLowerCase() === detail.toLowerCase());
    } else if (typeof detail === 'number') {
        pizza = menu.find(pizzaObj => pizzaObj.id === detail);
    } else {
        throw new TypeError('The identifier should be either number or string');
    }
    if (!pizza) {
        console.error("Pizza not found.")
        return null;
    }
    return pizza;
}


placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
