import React from 'react';
import  Icon  from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from '../../../common/components/UI/ContainerTwo';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import NextImage from '../../../common/components/NextImage';
import Link from '../../../common/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
} from './customer.style';
import illustration from '../../../common/assets/image/agencyModern/customer.png';

const Customer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <NextImage src={illustration} alt="Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="Empowering Businesses and Individuals with Cutting-Edge Technology"
            />
            <Text content="Qawaz is dedicated to providing innovative app solutions that empower businesses and individuals to work smarter, not harder. Our apps are designed to increase productivity, streamline operations and enhance communication. With a wide range of services and a commitment to customer satisfaction, we have helped many users worldwide achieve their goals." />
            <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Customer;
