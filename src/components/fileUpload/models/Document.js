const mongoose = require("mongoose");

const documentSchema =
  new mongoose.Schema(
    {
      documentName: {
        type: String,
        required: true,
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

module.exports = mongoose.model(
  "Document",
  documentSchema
);