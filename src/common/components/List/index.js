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
          &nbsp;&nbsp;
          {text}
        </a>
      </Link>
    ) : (
      <Fragment>
        {icon}
        &nbsp;&nbsp;
        {text}
      </Fragment>
    )}
  </ListWrapper>
);

export default List;
