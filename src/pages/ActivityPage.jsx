import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Navbar from "../components/Navbar";

// Bind modal to the app element for accessibility
Modal.setAppElement("#root");

const Container = styled.div`
  padding: 120px 5%;
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #FFF;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 120px 5%;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  width: 60%;
  align-items: flex-start;
  gap: 2rem;
  margin: 0 auto 40px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  object-fit: cover;
`;

const HeaderText = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  color: #092A5B;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 16px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.div`
  color: #525252;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;

  p {
    margin: 0 0 12px 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const VideoSection = styled.div`
  margin-bottom: 40px;
`;

const ImageSection = styled.div`
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 372px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 372px;
  height: 372px;
  object-fit: contain;
  margin-bottom: 10px;
  cursor: pointer;
`;

const VideoThumbnail = styled.div`
  position: relative;
  max-width: 369px;
  max-height: 290px;
  border-radius: 10px;
  overflow: hidden;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WatchButton = styled.button`
  position: absolute;
  width: 120px;
  height: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #092A5B;
  border: 2px solid #092A5B;
  border-radius: 22px;
  background: #FFF;
  padding: 6px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #092A5B;
  text-align: center;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  &:hover {
    background-color: #092A5B;
    color: white;
  }
`;

const VideoCaption = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #FFF;
  font-family: Ubuntu;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 8px;
  margin: 0;
  text-align: center;
`;

const ImageCaption = styled.p`
  width: 372px;
  height: 40px;
  text-align: left;
  color: #525252;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const FooterText = styled.p`
  color: #092A5B;
  text-align: center;
  font-family: Ubuntu;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 60px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.ReactModal__Overlay--after-open {
    opacity: 1;
  }

  &.ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 720px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &.ReactModal__Content--after-open {
    transform: scale(1);
    opacity: 1;
  }

  &.ReactModal__Content--before-close {
    transform: scale(0.9);
    opacity: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    max-height: 70vh;
  }
`;

const ImageModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &.ReactModal__Content--after-open {
    transform: scale(1.2);
    opacity: 1;
  }

  &.ReactModal__Content--before-close {
    transform: scale(0.9);
    opacity: 0;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
    max-height: 85vh;
  }
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
  color: #092A5B;
  margin-bottom: 20px;
  text-align: center;
`;

const ImageModalTitle = styled.h3`
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #092A5B;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: red;
    transform: rotate(90deg);
  }
`;
const CloseButtonImageModal = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: white;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: red;
    transform: rotate(90deg);
  }
`;

const VideoPlayer = styled.iframe`
  width: 100%;
  height: 360px;
  border: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ImageViewer = styled.div`
  position: relative;
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  transform: scale(${props => props.zoom});
  transition: transform 0.3s ease;
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const ZoomButton = styled.button`
  background: transparent;
  border: 2px solid #fff;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`;

const ActivityPage = () => {
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [currentCaption, setCurrentCaption] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);

  const openVideoModal = (videoUrl, caption) => {
    setCurrentVideo(videoUrl);
    setCurrentCaption(caption);
    setVideoModalIsOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalIsOpen(false);
    setCurrentVideo("");
    setCurrentCaption("");
  };

  const openImageModal = (imageSrc, caption) => {
    setCurrentImage(imageSrc);
    setCurrentCaption(caption);
    setZoomLevel(1); // Reset zoom on open
    setImageModalIsOpen(true);
  };

  const closeImageModal = () => {
    setImageModalIsOpen(false);
    setCurrentImage("");
    setCurrentCaption("");
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3)); // Max zoom: 3x
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5)); // Min zoom: 0.5x
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const videos = [
    {
      thumbnail: "/Activity-vid1-cover.png",
      videoUrl: "https://www.youtube.com/embed/LzBhj_Ha_iA?si=Mz5bQI0Nl5L_J_JD",
      caption: "Dil Se Rock Cover",
    },
    {
      thumbnail: "/Activity-vid2-cover.png",
      videoUrl: "https://www.youtube.com/embed/IlIA8zg1kY0",
      caption: "Bohemian Rhapsody Solo",
    },
    {
      thumbnail: "/Activity-vid3-cover.png",
      videoUrl: "https://www.youtube.com/embed/BVWBB7II0Ro?si=IC1kcNS9BmIsIJrx",
      caption: "Celebrating Cognizant Anthem",
    },
  ];

  const images = [
    {
      src: "/Activity-img1.png",
      caption: "Behind the scenes of my band’s gig.",
    },
    {
      src: "/Activity-img2.png",
      caption: "That one time when my band performed with none other than Rahul Deshpande on radio!",
    },
    {
      src: "/Activity-img3.png",
      caption: "And that one time when my team won runner up prize for composing an anthem for Cognizant.",
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        {/* Header Section */}
        <HeaderSection>
          <ProfileImage src="/Activity-main-img.png" alt="Profile" />
          <HeaderText>
            <Heading>What else I do</Heading>
            <Description>
              <p>
                If there’s one thing I love more than designing, it is music! From playing the simplest acoustic tunes to shredding some hard rock solos, I find true solace in music.
              </p>
              <p>
                I play Bollywood, Sufi, Rock and Fusion along with my fellow musicians. I’m also a composer and have composed many originals, which are forever work in progress.
              </p>
              <p>
                Some of my major influences are Led Zeppelin, Pink Floyd, Prateek Kuhad, A. R. Rahman, Gregory Alan Isakov and dozens of lesser known Folk based artists.
              </p>
            </Description>
          </HeaderText>
        </HeaderSection>

        {/* Video Section */}
        <VideoSection>
          <CardContainer>
            {videos.map((video, index) => (
              <Card key={index}>
                <VideoThumbnail>
                  <ThumbnailImage src={video.thumbnail} alt={video.caption} />
                  <WatchButton onClick={() => openVideoModal(video.videoUrl, video.caption)}>
                    Watch Video
                  </WatchButton>
                  <VideoCaption>{video.caption}</VideoCaption>
                </VideoThumbnail>
              </Card>
            ))}
          </CardContainer>
        </VideoSection>

        {/* Image Section */}
        <ImageSection>
          <CardContainer>
            {images.map((image, index) => (
              <Card key={index}>
                <CardImage
                  src={image.src}
                  alt={image.caption}
                  onClick={() => openImageModal(image.src, image.caption)}
                />
                <ImageCaption>{image.caption}</ImageCaption>
              </Card>
            ))}
          </CardContainer>
        </ImageSection>

        {/* Footer Text */}
        <FooterText>
          Let’s catch up for a jamming session and a cup of coffee!
        </FooterText>

        {/* Modal for Video Playback */}
        <Modal
          isOpen={videoModalIsOpen}
          onRequestClose={closeVideoModal}
          className="modal-content"
          overlayClassName="modal-overlay"
          closeTimeoutMS={300}
        >
          <CloseButton onClick={closeVideoModal}>×</CloseButton>
          <ModalTitle>{currentCaption}</ModalTitle>
          <VideoPlayer
            src={currentVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal>

        {/* Modal for Image Viewing */}
        <Modal
          isOpen={imageModalIsOpen}
          onRequestClose={closeImageModal}
          className="image-modal-content"
          overlayClassName="modal-overlay"
          closeTimeoutMS={300}
        >
          <CloseButtonImageModal onClick={closeImageModal}>×</CloseButtonImageModal>
          <ImageModalTitle>{currentCaption}</ImageModalTitle>
          <ImageViewer onWheel={handleWheel}>
            <ModalImage src={currentImage} alt={currentCaption} zoom={zoomLevel} />
          </ImageViewer>
          <ZoomControls>
            <ZoomButton onClick={handleZoomIn} disabled={zoomLevel >= 3}>+</ZoomButton>
            <ZoomButton onClick={handleZoomOut} disabled={zoomLevel <= 0.5}>−</ZoomButton>
          </ZoomControls>
        </Modal>
      </Container>
    </>
  );
};

export default ActivityPage;