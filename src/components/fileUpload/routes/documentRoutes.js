const express = require("express");

const multer = require("multer");

const Document = require("../models/Document");

const router = express.Router();

// Multer Memory Storage
const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

// Upload Document
router.post(
  "/upload",

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

      const newDocument = new Document({
        documentName:
          req.body.documentName,

        fileName: req.file.originalname,

        fileType: req.file.mimetype,

        fileData: req.file.buffer,
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

// Get All Documents
router.get("/", async (req, res) => {
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
});

// Get Single File
router.get("/:id", async (req, res) => {
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

    res.set({
      "Content-Type":
        document.fileType,

      "Content-Disposition": `inline; filename="${document.fileName}"`,
    });

    res.send(document.fileData);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message:
        "Error Fetching File",
    });
  }
});

module.exports = router;