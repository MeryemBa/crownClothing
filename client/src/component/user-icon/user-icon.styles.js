import styled from "styled-components";
import { ReactComponent as User } from "../../assets/user.svg";
export const UserIconConatiner = styled.div`
  width: 45px;
  height: 45px;
  margin-right:5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const UserAvatarIcon  = styled(User)`
  width: 24px;
  height: 24px;
`;

