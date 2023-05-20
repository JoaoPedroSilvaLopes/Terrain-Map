import { ReactNode } from 'react';
import * as S from './panel.styles';
import Section from '../section/section';

type Props = {
  title?: string
  children: ReactNode;
};

const Panel: React.FC<Props> = ({ title, children }) => {
  return <S.Panel>
    {title && <Section title={title}/>}
    {children}
  </S.Panel>;
};

export default Panel;
