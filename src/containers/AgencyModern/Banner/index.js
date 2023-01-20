import React from 'react';
import Container from '../../../common/components/UI/ContainerTwo';
import Text from '../../../common/components/Text';
import Button from '../../../common/components/Button';
import Heading from '../../../common/components/Heading';
import Input from '../../../common/components/Input';
import BannerWrapper, {
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import paypal from '../../../common/assets/image/agencyModern/paypal.png';
import google from '../../../common/assets/image/agencyModern/google.png';
import dropbox from '../../../common/assets/image/agencyModern/dropbox.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Heading
            as="h1"
            content="Be Productive &amp; Get more done with our Apps"
          />

          <Text
            className="banner-caption"
            content="Our easy to use apps provide you with tools to work smarter and faster with less mistakes. We create tools for creative people to hack their productivity."
          />

          <Subscribe>
            <Input
              inputType="email"
              placeholder="Enter Email Address"
              iconPosition="left"
              aria-label="email"
            />
            <Button title="Subscribe" type="submit" />
          </Subscribe>

          {/*<SponsoredBy>*/}
          {/*  <Text className="sponsoredBy" content="Sponsored by:" />*/}
          {/*  <ImageGroup>*/}
          {/*    <NextImage src={paypal} alt="Paypal" />*/}
          {/*    <NextImage src={google} alt="Google" />*/}
          {/*    <NextImage src={dropbox} alt="Dropbox" />*/}
          {/*  </ImageGroup>*/}
          {/*</SponsoredBy>*/}
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
