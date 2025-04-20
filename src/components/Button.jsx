import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
  width: 120px;
  height: 32px;
  background-color: #092A5B;
  text-decoration: none;
  text-align: center;
  font-family: Lato, sans-serif;
  font-style: normal;
  line-height: normal;
  padding: 4px 8px;
  border-radius: 22px;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    background: white;
    transition: right 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: #092A5B;
    border: 2px solid #092A5B;
    cursor: pointer;
  }

  &:hover:before {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;

const Button = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
