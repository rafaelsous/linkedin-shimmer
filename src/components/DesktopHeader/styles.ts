import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 30px;
  z-index: 8;
  background: var(--color-header);

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1128px;
  height: 52px;

  .left, .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;
    padding-top: 6px;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 90px;
      min-height: 100%;

      background: none;
      border: none;
      outline: none;
      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

const generalIconCss = css`
  width: 24px;
  height: 24px;
  transition: 0.2s;
`;

export const LinkedInIcon = styled(GrLinkedin)`
  width: 34px;
  height: 34px;
  color: var(--color-linkedin);
  background: #fff;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  margin-left: 12px;
  background: var(--color-input);
  border: none;
  outline: none;
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border-radius: 2px;
  transition: 0.2s;

  &:focus {
    background: var(--color-white);
  }
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCss}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCss}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%unset;
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;

