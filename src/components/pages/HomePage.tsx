import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../molecules/CodeBlock';

const a = `
# aaa
test
\`\`\`yaml
---
person:
  - name: Takuma Sasaki
  - age: 28
  -
account:
  github: matsubara0507
  qiita: matsubara0507
\`\`\`
`;

const HomePage: FC = () => (
  <ReactMarkdown source={a} renderers={{ code: CodeBlock }} />
);
export default HomePage;
