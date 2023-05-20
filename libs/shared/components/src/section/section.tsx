import * as S from './section.styles';

type Props = {
  title?: string;
};

const Section: React.FC<Props> = ({ title }) => {
  return (title ? <S.SectionWrapper>{title}</S.SectionWrapper> : <></>);
};

export default Section;
