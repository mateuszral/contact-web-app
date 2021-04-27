import React from 'react';
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
  ErrorMessage,
} from './Home.styles';

const schema = yup.object().shape({
  email: yup.string().email('Email is not valid.').required('This value is required.'),
  subject: yup.string().max(40).required('This value is required.'),
  message: yup.string().required('This value is required.'),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    console.log(data);
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
          <FormField
            label="email"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            {...register('email')}
            isError={errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
          <FormField
            label="subject"
            placeholder="Enter Subject"
            name="subject"
            id="subject"
            {...register('subject')}
            isError={errors.subject}
          />
          {errors.subject && <ErrorMessage>{errors.subject?.message}</ErrorMessage>}
          <FormField
            label="comment"
            placeholder="Write your comment..."
            name="message"
            id="message"
            as="textarea"
            {...register('message')}
            isError={errors.message}
          />
          {errors.message && <ErrorMessage>{errors.message?.message}</ErrorMessage>}
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
