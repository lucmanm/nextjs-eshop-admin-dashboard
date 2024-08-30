'use client';
import { ButtonWithIcon } from '@/components/ui/button-w-icon';
import { Document, Page, PDFDownloadLink, StyleSheet, Text } from '@react-pdf/renderer';
import { Download, Rotate3DIcon } from 'lucide-react';

// Create styles
// Font.register({
//     family: 'Oswald',
//     src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
//   });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document Component
const QuoteTempalteOne = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

export const QuotationTheme = () => {
  return (
    <main className="p-6">
      <PDFDownloadLink document={<QuoteTempalteOne />} fileName="FILENAME">
        {({ loading }) =>
          loading ? (
            <ButtonWithIcon
              {...{
                label: 'Loading',
                icon: <Rotate3DIcon className="size-4" />,
              }}
            />
          ) : (
            <ButtonWithIcon
              {...{
                label: 'Download',
                icon: <Download className="size-4" />,
              }}
            />
          )
        }
      </PDFDownloadLink>
    </main>
  );
};
