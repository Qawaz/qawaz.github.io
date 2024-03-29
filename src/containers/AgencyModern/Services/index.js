import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from '../../../common/components/UI/ContainerTwo';
import NextImage from '../../../common/components/NextImage';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import FeatureBlock from '../../../common/components/FeatureBlock';

import SectionWrapper, { SectionHeader, ServiceWrapper } from './service.style';
import data from '../../../common/data/AgencyModern';

const Services = () => {
  return (
    <SectionWrapper id="services">
      <Container>
        <Fade up delay={100}>
          <SectionHeader>
            <Heading content="Built For Everyone" />
            <Text content="Our apps span multiple platforms & systems , We are constantly growing & Welcome everyone." />
          </SectionHeader>
        </Fade>
        <ServiceWrapper>
          {data.services.map((item, index) => (
            <Fade up delay={130 * item.id} key={`service-key-${item.id}`}>
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="service__item"
                icon={
                  <NextImage
                    src={item.icon}
                    alt={`Blog Image ${item.id}`}
                    objectFit="cover"
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </ServiceWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Services;
