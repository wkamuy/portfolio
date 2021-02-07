// ~/components/CodeBlock.tsx
import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import materialDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

type P = {
  value: string;
  language?: string;
};

const CodeBlock: FC<P> = ({ value, language }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <SyntaxHighlighter language={language} style={materialDark}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
