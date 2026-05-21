const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const multer = require("multer");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/documentDB")
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Error");

    console.log(error);
  });

// MongoDB Schema
const documentSchema =
  new mongoose.Schema(
    {
      documentName: {
        type: String,
      },

      fileName: {
        type: String,
      },

      fileType: {
        type: String,
      },

      fileData: {
        type: Buffer,
      },
    },
    {
      timestamps: true,
    }
  );

// Model
const Document = mongoose.model(
  "Document",
  documentSchema
);

// Multer Memory Storage
const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Upload File API
app.post(
  "/api/documents/upload",

  upload.single("file"),

  async (req, res) => {
    try {
      console.log("BODY:", req.body);

      console.log("FILE:", req.file);

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "File Required",
        });
      }

      // Save File In MongoDB
      const newDocument = new Document({
        documentName:
          req.body.documentName,

        fileName:
          req.file.originalname,

        fileType:
          req.file.mimetype,

        fileData:
          req.file.buffer,
      });

      await newDocument.save();

      res.status(201).json({
        success: true,

        message:
          "Document Uploaded Successfully",

        data: {
          id: newDocument._id,

          documentName:
            newDocument.documentName,

          fileName:
            newDocument.fileName,

          fileType:
            newDocument.fileType,
        },
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,

        message: "Upload Failed",
      });
    }
  }
);

// Get All Documents API
app.get(
  "/api/documents",

  async (req, res) => {
    try {
      const documents =
        await Document.find().select(
          "-fileData"
        );

      res.status(200).json({
        success: true,

        count: documents.length,

        data: documents,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,

        message:
          "Failed To Fetch Documents",
      });
    }
  }
);

// Get Single File API
app.get(
  "/api/documents/:id",

  async (req, res) => {
    try {
      const document =
        await Document.findById(
          req.params.id
        );

      if (!document) {
        return res.status(404).json({
          success: false,

          message:
            "Document Not Found",
        });
      }

      // Set File Headers
      res.set({
        "Content-Type":
          document.fileType,

        "Content-Disposition": `inline; filename="${document.fileName}"`,
      });

      // Send File
      res.send(document.fileData);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,

        message:
          "Error Fetching File",
      });
    }
  }
);

// Server Start
const PORT = 8091;

app.listen(PORT, () => {
  console.log(
    `🚀 Server Running On Port ${PORT}`
  );
});