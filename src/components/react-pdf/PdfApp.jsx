import React, { useState } from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#f3f4f6",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
  },

  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: "#2563eb",
  },

  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});

// PDF Component
const MyDocument = ({ student }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.heading}>Student PDF Report</Text>

        <Text style={styles.text}>Name: {student.name}</Text>

        <Text style={styles.text}>Course: {student.course}</Text>

        <Text style={styles.text}>College: {student.college}</Text>
      </View>
    </Page>
  </Document>
);

export default function PdfApp() {
  // Hook
  const [student, setStudent] = useState({
    name: "Sripathi",
    course: "B.Tech",
    college: "ABC Engineering College",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          React PDF Renderer
        </h1>

        <div className="space-y-3 mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span> {student.name}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Course:</span> {student.course}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">College:</span>{" "}
            {student.college}
          </p>
        </div>

        {/* Hook Update Button */}
        <button
          onClick={() =>
            setStudent({
              name: "Balakrishna",
              course: "MCA",
              college: "XYZ University",
            })
          }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300 mb-4"
        >
          Change Hook Data
        </button>

        {/* PDF Download */}
        <PDFDownloadLink
          document={<MyDocument student={student} />}
          fileName="student-report.pdf"
        >
          {({ loading }) => (
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300">
              {loading ? "Generating PDF..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
}