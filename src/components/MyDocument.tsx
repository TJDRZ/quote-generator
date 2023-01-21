import React from "react";
import {
  Document,
  Page,
  Image,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import Tilley from "../assets/Tilley.png";

type MyDocumentProps = {
  code: string;
  name: string;
  price: string;
  person: string;
  position: string;
  fsc?: string;
};

const styles = StyleSheet.create({
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
  view: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
    flex: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textDecoration: "underline",
  },
  text: {
    margin: 30,
  },
});

function MyDocument(props: MyDocumentProps) {
  const { code, name, price, fsc, person, position } = props;
  return (
    <Document>
      <Page size="LETTER" orientation="landscape">
        <Image src={Tilley} style={styles.pageBackground} />
        <View style={styles.view}>
          <Text style={styles.header}>Price Quote</Text>
          <Text style={styles.text}>
            {new Date().toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Text>
          <Text style={styles.text}>
            {code} - {name}
          </Text>
          <Text style={styles.text}>{price}</Text>
          {fsc && <Text style={styles.text}>Fuel Surcharge: {fsc}</Text>}
          <Text style={styles.text}>
            {position}: {person}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
