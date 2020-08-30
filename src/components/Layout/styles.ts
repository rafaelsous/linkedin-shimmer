import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .left-column, .right-column, .ad-banner {
    display: none;
  }

  > span {
    display: flex;
    margin-top: 48px;
  }

  @media (min-width: 1180px) {
    > main {
      display: flex;
      margin: 0 30px;
      justify-content: center;
    }

    > span {
      margin-top: 52px;
      padding: 8px 0;
    }

    .left-column, .right-column, .ad-banner {
      display: unset;
    }    

    .middle-column {
      margin: 0 25px 16px;
    }
  }
`;
