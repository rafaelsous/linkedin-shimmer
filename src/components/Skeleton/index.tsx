import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    #E7EDF1 0%,
    #F8F8F8 50%,
    #E7EDF1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  &.white {
      background-image: linear-gradient(
        -90deg,
        #FFF 0%,
        #E7EDF1 50%,
        #FFF 100%
      );
    }
`;
