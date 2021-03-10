import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const CustomLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const MyLink = ({to, text, alt, onClick}) => (
  <Link
    component={CustomLink}
    to={to}
    onClick={onClick}
    alt={alt || ''}
  >
    {text}
  </Link>
);

export default MyLink;
