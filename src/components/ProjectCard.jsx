import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1E3A8A;
  margin: 0;
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin: 0;
`;

const Tag = styled.span`
  padding: 4px 12px;
  background-color: #E5E7EB;
  color: #4B5563;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const Description = styled.p`
  color: #4B5563;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
`;

const ProjectCard = ({ title, description, tags, image, imageBg, link }) => {
  return (
    <Card>
      <Image style={{ backgroundImage: `url(${image})`, backgroundColor: imageBg }} />
      <Content>
        <Title>{title}</Title>
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Description>{description}</Description>
        <ButtonContainer>
          <Link to={link}>
            <Button>View Project</Button>
          </Link>
        </ButtonContainer>
      </Content>
    </Card>
  );
};

export default ProjectCard;
