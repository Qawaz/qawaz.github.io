import React from 'react';
import Icon from 'react-icons-kit';
import {chevronRight} from 'react-icons-kit/feather/chevronRight';

import Container from '../../../common/components/UI/ContainerTwo';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import NextImage from '../../../common/components/NextImage';
import List from '../../../common/components/List';
import Link from '../../../common/components/Link';

import SectionWrapper, {
    Section,
    Content,
    Illustration,
    ListGroup,
} from './workHard.style';
import data from '../../../common/data/AgencyModern';
import illustration from '../../../common/assets/image/agencyModern/mobile app development isometric flowchart.png';
import checkIcon from '../../../common/assets/image/agencyModern/tick-circle.png';
import {useTheme} from "styled-components";

const WorkHard = () => {
    const theme = useTheme()
    return (
        <SectionWrapper>
            <Container>
                <Section>
                    <Content>
                        <Heading
                            as="h2"
                            content="Simplify Your Workflow with Qawaz's App Solutions"
                        />
                        <Text
                            content="At Qawaz, we understand the importance of working smartly and efficiently. That's why we offer a wide range of apps to help simplify your workflow. From note-taking and to-do lists to file sharing and project management, our apps are designed to help you work smarter, not harder."/>
                        <ListGroup>
                            {data.WorkHardList.map((item) => (
                                <List
                                    className="list-item"
                                    key={item.id}
                                    text={item.title}
                                    icon={
                                        item.icon != null ? (
                                            <item.icon style={{width: "48px", height: "48px"}} width={48} height={48}
                                                       color={theme.colors.primary}/>
                                        ) : (
                                            item.icon_url != null ? (
                                                <img
                                                    src={item.icon_url}
                                                    alt="tick icon"
                                                    className="check-icon"
                                                    width={48}
                                                    height={48}
                                                    style={{width: "48px", height: "48px"}}
                                                />
                                            ) : null
                                        )
                                    }
                                />
                            ))}
                        </ListGroup>
                        {/*<Link className="explore" href="#">*/}
                        {/*  Explore more <Icon icon={chevronRight} />*/}
                        {/*</Link>*/}
                    </Content>
                    <Illustration>
                        <NextImage src={illustration} alt="Illustration"/>
                    </Illustration>
                </Section>
            </Container>
        </SectionWrapper>
    );
};

export default WorkHard;
