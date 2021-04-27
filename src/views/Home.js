import React, { useState } from 'react';
import styled from 'styled-components';

import Header from 'components/molecules/Header/Header';

import phoneIcon from 'assets/images/phone.svg';

const ContentWrapper = styled.div``;

const Phone = styled.img`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
`;

const initialFormValues = {
  email: '',
  subject: '',
  message: '',
};

const Home = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChangeInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <Header />
      <ContentWrapper>
        <div>
          <Phone src={phoneIcon} alt="" />
          <p>1-888-444-5555</p>
          <h2>Need assistance?</h2>
          <p>
            For immediate assistance with your reservation, please call us. For general questions,
            you can email us. You&apos;ll recieve a response within 2 business days.
          </p>
        </div>
        <form onSubmit={handleSubmitForm}>
          <h2>Email Us</h2>
          <label htmlFor="email">
            EMAIL *
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
          <label htmlFor="subject">
            SUBJECT *
            <input
              type="subject"
              placeholder="Enter Subject"
              name="subject"
              id="subject"
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
          <label htmlFor="message">
            COMMENT *
            <textarea
              placeholder="Write your comment..."
              name="message"
              id="message"
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
          <button type="submit">SEND</button>
        </form>
      </ContentWrapper>
    </>
  );
};

export default Home;
