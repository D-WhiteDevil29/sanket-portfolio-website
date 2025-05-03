import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  max-width: 766px;
  height: 340px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center; /* Vertically center content and image in row */
    justify-content: center; /* Center the row horizontally */
    gap: 24px;
  }

  @media (max-width: 767px) {
    height: auto; /* Allow card height to adjust to content in mobile */
    padding: 16px; /* Reduce padding for smaller screens */
  }
`;


const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left; /* Ensure text alignment is left */

  @media (min-width: 768px) {
    width: 340px; /* Fixed width as specified */
    height: 174px; /* Fixed height as specified */
    justify-content: center; /* Vertically center content within its height */
    text-align: left; /* Ensure text remains left-aligned */
  }

  @media (max-width: 767px) {
    gap: 6px; /* Reduce gap for better spacing on mobile */
    width: 100%; /* Full width in mobile */
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1E3A8A;
  margin: 0;
  margin-bottom: 0.8rem;

  @media (max-width: 767px) {
    font-size: 20px; /* Slightly smaller for mobile readability */
    margin-bottom: 0.6rem; /* Reduce margin for mobile */
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
  margin: 0;

  @media (max-width: 767px) {
    flex-wrap: wrap; /* Allow tags to wrap on small screens */
    margin-bottom: 1rem; /* Reduce margin for mobile */
    gap: 4px; /* Smaller gap between tags */
  }
`;

const Tag = styled.span`
  padding: 4px 12px;
  background-color: #E5E7EB;
  color: #4B5563;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;

  @media (max-width: 767px) {
    padding: 2px 8px; /* Reduce padding for smaller tags */
    font-size: 10px; /* Smaller font size for mobile */
  }
`;

const Description = styled.p`
  color: #4B5563;
  font-size: 18px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 14px; /* Smaller font size for mobile readability */
    line-height: 1.4; /* Adjusted line height for mobile */
  }
`;

const ButtonContainer = styled.div`
  margin-top: 16px;

  @media (max-width: 767px) {
    margin-top: 12px; /* Reduce margin for mobile */
  }
`;

const Image = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    height: 150px;
  }
`;


const ProjectCard = ({ title, description, tags, image, imageBg, link }) => {
  return (
    <Card>
      <Image style={{ background: imageBg }}>
        <img src={image} alt={title} />
      </Image>
      <Content>
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{title}</Title>
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