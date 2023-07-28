// Wrapper
import styled from "styled-components";
export const Wrapper = styled.section`
  display: flex;
  justify-content: center; 
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: #00AAB3 ;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3) ;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width:) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`; 