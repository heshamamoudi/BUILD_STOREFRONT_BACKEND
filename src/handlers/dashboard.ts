import * as express from 'express'

import { DashboardQueries } from '../services/dashboard'

const dashboard = new DashboardQueries()

const dashboardRoutes = (app: express.Application) => {
    app.get('/products_in_orders', productsInOrdersq)
    app.get('/products_top5', mostExpensive)
    app.get('/users-with-orders', usersWithOrders)
}



const productsInOrdersq = async (req: express.Request, res: express.Response) => {
  const products = await dashboard.productsInOrders()
  res.json(products)
}
const mostExpensive = async (req: express.Request, res: express.Response) => {
    const products = await dashboard.expensiveProducts()
    res.json(products)
  }
  const usersWithOrders = async (req: express.Request, res: express.Response) => {
    const products = await dashboard.usersWithOrders()
    res.json(products)
  }

export default dashboardRoutes