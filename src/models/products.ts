import * as bcrypt from 'bcrypt'
import client from '../database'

export type product = {
  id?: number;
  name: string;
  price: string;
}

export class productStore {
   
  async index(): Promise<product[]> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT * FROM products;'
  
      const result = await conn.query(sql)
  
      conn.release()
  
      return result.rows 
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`)
    }
  }

  async show(id: number): Promise<product> {
    try {
        const sql = `SELECT * FROM products WHERE id=$1;`
        // @ts-ignore
        const conn = await client.connect()

        const result = await conn.query(sql,[id])

        conn.release()

        return result.rows[0]
    } catch (err) {
        throw new Error(`Could not get product ${id}. Error: ${err}`)
    }
  }

  async create(p: product): Promise<product> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'INSERT INTO products (name, price) VALUES($1, $2) RETURNING *'

   

      const result = await conn.query(sql, [p.name, p.price])
      const product = result.rows[0]

      conn.release()

      return product
    } catch(err) {
      throw new Error(`unable create product (${p.name}): ${err}`)
    } 
  }


  async delete(id: number): Promise<product> {
    try {
      const sql = `DELETE FROM products WHERE id=$1`
        // @ts-ignore
        const conn = await client.connect()

        const result = await conn.query(sql,[id])

        const product = result.rows[0]

        conn.release()

        return product  
    } catch (err) {
        throw new Error(`Could not delete products ${id}. Error: ${err}`)
    }
  }
  async update(name:string,price:number,id:number): Promise<product> {
    try {
      const sql = `UPDATE products set name=$1 ,price=$2 WHERE id=$3`
        // @ts-ignore
        const conn = await client.connect()

        const result = await conn.query(sql,[name,price,id])

        const product = result.rows[0]

        conn.release()

        return product  
    } catch (err) {
        throw new Error(`Could not update product ${id}. Error: ${err}`)
    }
  }
}