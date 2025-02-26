import React  from 'react';
import { Html, Head, Body, Container, Section, Column, Row } from '@react-email/components';
import { Header } from './Header';
import { EventDetails } from './EventDetails';
import { OrderDetails } from './OrderDetails';

const EmailTemplate = (): React.JSX.Element => (
  <Html>
    <Head />
    <Body className="bg-white">
      <Container className="mx-auto p-4">
        <Header name="Robert Stuart Ramirez Marin" ticketName="Urban Night Party" />
        <EventDetails
          date="January 25 - 11pm - January 26 - 4am EST"
          time="11pm - 4am"
          location="48 West 21st Street New York, NY 10010 United States"
        />
        <OrderDetails
          eventName="Urban Night Party"
          ticketPrice="$49.99"
          ticketType="VIP"
          discount="$00.00"
          subtotal="$49.99"
          total="$49.99"
        />
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;