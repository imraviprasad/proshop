import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdin: true,
  },
  {
    name: "John doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdin: false,
  },
  {
    name: "Jane doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdin: false,
  },
];

export default users;
