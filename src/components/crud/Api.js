import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const client = new MongoClient("mongodb://127.0.0.1:27017/");
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("reactdb");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Connection Failed", err);
  }
}
connectDB();


// =============================
// ✅ GET ALL USERS
// =============================
app.get("/users", async (req, res) => {
  try {
    const users = await db.collection("tblusers").find({}).toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});


// =============================
// ✅ GET SINGLE USER (by UserId)
// =============================
app.get("/users/:userid", async (req, res) => {
  try {
    const user = await db.collection("tblusers").findOne({
      UserId: req.params.userid
    });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


// =============================
// ✅ CREATE USER
// =============================
app.post("/users", async (req, res) => {
  try {
    const userdetails = {
      UserId: req.body.UserId,
      UserName: req.body.UserName,
      Password: req.body.Password,
      Age: parseInt(req.body.Age),
      Mobile: req.body.Mobile,
      Subscribed: req.body.Subscribed === true
    };

    await db.collection("tblusers").insertOne(userdetails);

    res.json({ message: "User Created Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Insert Failed" });
  }
});


// =============================
// ✅ UPDATE USER (by UserId)
// =============================
app.put("/users/:userid", async (req, res) => {
  try {
    const result = await db.collection("tblusers").updateOne(
      { UserId: req.params.userid },
      {
        $set: {
          UserName: req.body.UserName,
          Password: req.body.Password,
          Age: parseInt(req.body.Age),
          Mobile: req.body.Mobile,
          Subscribed: req.body.Subscribed === true
        }
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.json({ message: "User Updated Successfully" });

  } catch (err) {
    res.status(500).json({ message: "Update Failed" });
  }
});


// =============================
// ✅ DELETE USER (by UserId)
// =============================
app.delete("/users/:userid", async (req, res) => {
  try {
    const result = await db.collection("tblusers").deleteOne({
      UserId: req.params.userid
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.json({ message: "User Deleted Successfully" });

  } catch (err) {
    res.status(500).json({ message: "Delete Failed" });
  }
});


// =============================
// SERVER LISTEN
// =============================
app.listen(4000, () => {
  console.log("Server running at http://127.0.0.1:4000");
});
