/* eslint-disable */
import React, { Fragment } from 'react';
import { ListWrapper } from './list.style';
import {Link} from "gatsby";

const List = ({ className, icon, text, link, ...props }) => (
  <ListWrapper className={className}>
    {link ? (
      <Link to={link}>
        <a>
          {icon}
          {text}
        </a>
      </Link>
    ) : (
      <Fragment>
        {icon}
        {text}
      </Fragment>
    )}
  </ListWrapper>
);

export default List;
