import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create new Order
// @route POST /api/orders
// @access private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc Get order by ID
// @route Get /api/orders/:id
// @access private

const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @desc Update order to paid
// @route Get /api/orders/:id/pay
// @access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order items to paid");
});

// @desc Update order to delivered
// @route Get /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

// @desc Get All Orders
// @route Get /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
};
