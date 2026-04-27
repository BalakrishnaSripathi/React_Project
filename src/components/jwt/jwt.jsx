import jwt from "jsonwebtoken";

const token = jwt.sign(
  { userId: 1, role: "ADMIN" },
  "secretKey",
  { expiresIn: "1h" }
);

const decoded = jwt.verify(token, "secretKey");