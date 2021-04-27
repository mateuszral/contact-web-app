import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

import Header from 'components/molecules/Header/Header';
import FormField from 'components/molecules/FormField/FormField';

import phoneIcon from 'assets/images/phone.svg';
import heroImage from 'assets/images/hero.jpg';

import {
  ContentWrapper,
  Heading,
  Phone,
  Button,
  HeroWrapper,
  Footer,
  Message,
} from './Home.styles';

const schema = yup.object().shape({
  email: yup.string().email('Email is not valid.').required('This value is required.'),
  subject: yup.string().max(40).required('This value is required.'),
  message: yup.string().required('This value is required.'),
});

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const Home = () => {
  const [isErrorWithSubmitting, setIsErrorWithSubmitting] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    axios
      .post(`${BASE_URL}/posts`, data)
      .then(() => {
        setIsErrorWithSubmitting(false);
        setIsMessageSent(true);
        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000);
      })
      .catch(() => {
        setIsErrorWithSubmitting(true);
      });

    reset();
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
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Heading>Email Us</Heading>
          {isErrorWithSubmitting && (
            <Message>There is an error with submitting form. Try again later.</Message>
          )}
          {isMessageSent && <Message isSuccess>Your message was sent successfully.</Message>}
          <FormField
            label="email"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            {...register('email')}
            isError={errors.email}
          />
          {errors.email && <Message>{errors.email?.message}</Message>}
          <FormField
            label="subject"
            placeholder="Enter Subject"
            name="subject"
            id="subject"
            {...register('subject')}
            isError={errors.subject}
          />
          <Message>{errors.subject?.message}</Message>
          <FormField
            label="comment"
            placeholder="Write your comment..."
            name="message"
            id="message"
            as="textarea"
            {...register('message')}
            isError={errors.message}
          />
          {errors.message && <Message>{errors.message?.message}</Message>}
          <Button type="submit">SEND</Button>
        </form>
      </ContentWrapper>
      <HeroWrapper>
        <img src={heroImage} alt="" />
      </HeroWrapper>
      <Footer>
        <button type="button">Contact Us</button>
        <button type="button">Privacy policy</button>
        <div>
          <FaFacebookSquare size="1.5em" />
          <FaInstagramSquare size="1.5em" />
        </div>
        <Paragraph>&copy; {new Date().getFullYear()} NextTrip. All rights reserved</Paragraph>
      </Footer>
    </>
  );
};

export default Home;
