import { FC } from 'react';
import ReactMarkDown from 'react-markdown';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CommonTemplate from '../templates/CommonTemplate';
import CodeBlock from '../molecules/CodeBlock';
import aboutMe from '../../Data/aboutMe';

const HomePage: FC = () => (
  <CommonTemplate>
    <Grid container justify="center">
      <Grid item xs={11}>
        <Typography variant="h6">About Me</Typography>
        <Paper>
          <ReactMarkDown source={aboutMe} renderers={{ code: CodeBlock }} />
        </Paper>
      </Grid>
    </Grid>
  </CommonTemplate>
);
export default HomePage;
