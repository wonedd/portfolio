import { css, Global } from '@emotion/react';

export const media = {
  maxMobile: '@media(max-width:800px)',
  minlaptop: '@media(min-width: 800px)',
  laptop: '@media(min-width: 1000px)',
  desktop: '@media(min-width: 1400px)',
  large: '@media(min-width: 1600px)',
};

export const globalStyles = (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }
      @media (max-width: 1080px) {
        html {
          font-size: 93.75%;
        }
      }
      @media (max-width: 720px) {
        html {
          font-size: 87.5%;
        }
      }
      html,
      body {
        height: 100%;
      }
      body {
        background-color:var(--bgColor3);
        overflow-x: hidden;
      }
      body,
      input,
      button {
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
        color: var(--gray50);
      }
      button {
        cursor: pointer;
      }
      body::-webkit-scrollbar {
        width: 4px; /* width of the entire scrollbar */
      }
      body::-webkit-scrollbar-track {
        background: #222222; /* color of the tracking area */
      }
      body::-webkit-scrollbar-thumb {
        background-color: #7e7e7e; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
      }
      @keyframes grow {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform:scale(1)
        }
      }
      @keyframes MoveUpDown {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
          @keyframes circle{
      0%{
        transform:rotate(0deg)
        translate(-300px)
        rotate(0deg);
    
      }
      100%{
        transform:rotate(360deg)
        translate(0px)
        rotate(-360deg);
      }
    }
    
    @keyframes mygradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
    
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUpGoat {
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
}
@keyframes splash {
   from{
     letter-spacing:6px
   }
    50% {
      letter-spacing:15px;
    }
    
    100% {
      letter-spacing:6px;
    }
    }
    @keyframes typewriter {
  to {
    left: 100%;
  }
}

@keyframes blink {
  to {
    background: transparent;
  }
}
@keyframes blinkText {
  to {
    color: transparent;
  }
}
@keyframes flip{
    from{
        
        transform:rotateY(360deg);
    }

    to{
        
        transform:rotateY(-360deg);

    }
}

  @keyframes leftRight {
    from{
      left: 0;
    }
    to{
      right: 0;
    }
  }

      
      :root {
        --bgColor:#474747;
        --bgColor2:#011627;
        --bgColor3:#212529;
        --bgColor4:#8a817c;
        --bgColor5:#463f3a;
        --bgColor6:#403d39;
        --bgColor7:#5c6b73;
        --bgColor8:#7c7a7a;
        --bgColor9:#284b63;
      }
    `}
  />
);