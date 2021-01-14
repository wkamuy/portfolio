import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

type CopyrightProps = {
  authorName: string;
};

const Copyright: FC<CopyrightProps> = ({ authorName }) => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'© '}
    {new Date().getFullYear()} {authorName}.
  </Typography>
);

export default Copyright;
