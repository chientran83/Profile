import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const Styles = styled(Box)`
  /* DEMO-SPECIFIC STYLES */
  .typewriter h1 {
    color: ${({ theme }) => theme.primary.main};
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid ${({ theme }) => theme.primary.main}; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ theme }) => theme.primary.main};
    }
  }
`;
