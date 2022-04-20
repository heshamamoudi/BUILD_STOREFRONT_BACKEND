import client from '../database'

export class DashboardQueries {
  // Get all products that have been included in orders
  async productsInOrders(): Promise<{name: string, price: number, order_id: string}[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      const sql = 'select name,price,order_id,product_id,quantity from products INNER JOIN order_products On products.id = order_products.product_id;'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`)
    } 
  }
  async expensiveProducts(): Promise<{name: string, price: number, order_id: string}[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT name, price FROM products ORDER BY price DESC LIMIT 5;'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get most 5 expensive products: ${err}`)
    } 
  }
   // Get all users that have made orders
   async usersWithOrders(): Promise<{firstName: string, lastName: string}[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT first_name, last_name,username FROM users INNER JOIN orders ON users.id = orders.user_id;'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`)
    } 
}}