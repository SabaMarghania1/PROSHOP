import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access public

const authUser = asyncHandler(async (req, res) => {
  res.send("Auth User");
});

// @desc
// @route POST /api/users/
// @access public

const registerUser = asyncHandler(async (req, res) => {
  res.send("Register User");
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout User");
});

// @desc Get User Profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get User Profile");
});

// @desc Update User Profile
// @route Put /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user Profile");
});

// @desc Get users
// @route GET /api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("Get Users");
});

// @desc Get User By ID
// @route GET /api/users/:id
// @access Private/Admin

const getUserById = asyncHandler(async (req, res) => {
  res.send("Get User By Id");
});

// @desc Delete user
// @route Delete /api/users/:id
// @Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete User Profile");
});

// @desc update User
// @route Put /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
