import styled from "styled-components";
export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? "400px" : "450px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
 
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px) {
    
    height: 250px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: ${({ size }) => (size ? "0 0" : "center")};
  padding: 0;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

export const ContentContainer = styled.div`
  width:35%;
  height: 70px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-color: white;
  opacity: 0.8;
  position: absolute;
  bottom:50px;
  @media screen and (max-width: 800px) {
    
    
    bottom:50%;
    transform:translateY(50%);
  }
  @media screen and (max-width: 480px) {
    
    width:60%;
    bottom:25px;
    transform:unset;

  }
`;

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
