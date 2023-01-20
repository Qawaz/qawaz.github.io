import React, { Fragment } from 'react';

import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import NextImage from '../../../common/components/NextImage';
import Container from '../../../common/components/UI/ContainerTwo';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from '../../../common/components/Accordion';
import  Icon  from 'react-icons-kit';
import { thinDown } from 'react-icons-kit/entypo/thinDown';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import SectionWrapper, { ContentWrapper } from './features.style';
import feature from '../../../common/assets/image/agencyModern/features/feature.png';
import data from '../../../common/data/AgencyModern';

const Features = () => {
  return (
    <SectionWrapper id="feature">
      <Container>
        <ContentWrapper>
          <div className="image">
            <NextImage src={feature} alt="Feature Image" />
          </div>
          <div className="content">
            <Heading content="Qawaz - Innovative App Development" />
            <Text content="Welcome to Qawaz, a leading app development company. We specialize in creating innovative apps for individuals, teams, and companies. From note-taking and to-do lists to file sharing and custom development, we have a wide range of services to meet your needs. Browse our accordion sections to learn more about our offerings and approach." />
            <Accordion preExpanded={[0]}>
              <Fragment>
                {data.accordion.map((item, index) => (
                  <AccordionItem key={index} uuid={index}>
                    <Fragment>
                      <AccordionTitle>
                        <Fragment>
                          <Heading as="h4" content={item.title} />
                          <IconWrapper>
                            <OpenIcon>
                              <Icon icon={thinRight} size={18} />
                            </OpenIcon>
                            <CloseIcon>
                              <Icon icon={thinDown} size={18} />
                            </CloseIcon>
                          </IconWrapper>
                        </Fragment>
                      </AccordionTitle>
                      <AccordionBody>
                        <Text content={item.description} />
                      </AccordionBody>
                    </Fragment>
                  </AccordionItem>
                ))}
              </Fragment>
            </Accordion>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
