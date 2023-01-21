import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";

type MyDocumentProps = {
  code: string;
  name: string;
  price: string;
  person: string;
};

function MyDocument(props: MyDocumentProps) {
  return (
    <Document>
      <Page>
        <Text>TEST123</Text>
        <Text>{props.code}</Text>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
        <Text>{props.person}</Text>
      </Page>
    </Document>
  );
}

export default MyDocument;
