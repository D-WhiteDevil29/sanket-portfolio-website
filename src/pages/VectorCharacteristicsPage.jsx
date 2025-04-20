import styled from "styled-components";
import Button from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';


const imageNames = Array.from({ length: 20 }, (_, index) => `image${index + 1}.png`);

const VectorCharacteristicsPage = () => {
    return (
        <>
            <Navbar />
            <Container>
                <AppSection>
                    <LeftContent>
                        <AppTitle>Vector Character Design</AppTitle>
                        <TagContainer>
                            <Tag>Illustrations</Tag>
                            <Tag>Visual Design</Tag>
                        </TagContainer>
                        <Description>
                            This is a series of various vector artworks I designed out
                            of my personal interest. I’ve always been fascinated with minimalist, geometrical design for their simplicity.
                        </Description>
                        <Description>
                            I’ve used Adobe Illustrator to vectorize (trace) my pencil drawings and later used Photoshop for bitmap effects.
                        </Description>
                    </LeftContent>
                    <RightContent>
                    </RightContent>
                </AppSection>

                {/* Grid Container for Vector Images */}
                <GridContainer>
                    {imageNames.map((imageName, index) => (
                        <GridItem key={index}>
                            <VectorImage
                                src={`/vector-designs/${imageName}`}
                                alt={`Vector Character ${index + 1}`}
                            />
                        </GridItem>
                    ))}
                </GridContainer>
            </Container>
        </>
    );
};

export default VectorCharacteristicsPage;

/* Styled Components */
const Container = styled.div`
  width: 100%;
  padding: 120px 0 30px 0;
  position: relative;
  background-color: #fff;
`;

// App Overview Section
const AppSection = styled.div`
  display: flex;
  position: relative;
  margin: 2rem auto;
  width: 820px;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #F6F5F8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    gap: 2rem;
  }
`;

const LeftContent = styled.div`
  width: 55%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  width: 40%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const AppTitle = styled.h2`
  color: #092A5B;
  font-family: Ubuntu;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.span`
  padding: 3px 15px;
  border-radius: 22px;
  margin: 1rem 0;
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
  border: 1px solid #525252;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #525252;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AppImage = styled.img`
  width: 274px;
  position: absolute;
  top: -22%;
  right: 0;
  height: 370px;
  border-radius: 15px;
`;

// New Grid Container for Vector Images
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 1rem;
  width: 95%;
  margin: 4rem auto 2rem auto; /* Centered with bottom margin */

  @media (max-width: 900px) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for small screens */
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* 1 column for very small screens */
  }
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0; /* Optional: Add a background color to each grid item */
  overflow: hidden;
`;

const VectorImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;