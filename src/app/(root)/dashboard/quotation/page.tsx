'use client';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Cairo',
  src: 'https://fonts.gstatic.com/s/cairo/v14/SLXGc1nY6HkvalrExYw1ZIFqD-XkFVQk.ttf',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 37,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  headerText: {
    fontSize: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Computech Company</Text>
        <Text style={styles.headerText}>شركة كاف ميم باء ياء واو تاء كاف لتقنية المعلومات</Text>
      </View>
    </Page>
  </Document>
);

const QuotationPDF = () => {
  return (
    <PDFViewer style={{ flex: 1 }}>
      <MyDocument />
    </PDFViewer>
  );
};

export default QuotationPDF;
