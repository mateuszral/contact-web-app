import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

import Header from 'components/molecules/Header/Header';
import FormField from 'components/molecules/FormField/FormField';

import phoneIcon from 'assets/images/phone.svg';
import heroImage from 'assets/images/hero.jpg';

import { ContentWrapper, Heading, Phone, Button, HeroWrapper, Footer } from './Home.styles';

const initialFormValues = {
  email: '',
  subject: '',
  message: '',
};

const Home = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChangeInput = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <>
      <Header />
      <ContentWrapper>
        <div>
          <Phone src={phoneIcon} alt="" />
          <Paragraph isBold>1-888-444-5555</Paragraph>
          <Heading>Need assistance?</Heading>
          <Paragraph>
            For immediate assistance with your reservation, please call us. For general questions,
            you can email us. You&apos;ll recieve a response within 2 business days.
          </Paragraph>
        </div>
        <form onSubmit={handleSubmitForm}>
          <Heading>Email Us</Heading>
          <FormField
            label="email"
            placeholder="Enter Your Email"
            onChange={handleChangeInput}
            value={formValues.email}
            name="email"
            id="email"
          />
          <FormField
            label="subject"
            placeholder="Enter Subject"
            onChange={handleChangeInput}
            value={formValues.subject}
            name="subject"
            id="subject"
          />
          <FormField
            label="comment"
            placeholder="Write your comment..."
            onChange={handleChangeInput}
            value={formValues.message}
            name="message"
            id="message"
            as="textarea"
          />
          <Button type="submit">SEND</Button>
        </form>
      </ContentWrapper>
      <HeroWrapper>
        <img src={heroImage} alt="" />
      </HeroWrapper>
      <Footer>
        <button type="button">Contact Us</button>
        <button type="button">Privacy policy</button>
        <FaFacebookSquare size="1.5em" />
        <FaInstagramSquare size="1.5em" />
        <Paragraph>&copy; {new Date().getFullYear()} NextTrip. All rights reserved</Paragraph>
      </Footer>
    </>
  );
};

export default Home;
