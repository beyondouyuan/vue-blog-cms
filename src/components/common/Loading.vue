<template>
  <div class="shade">
    <svg class="spinner"
         viewBox="0 0 66 66"
         xmlns="http://www.w3.org/2000/svg">
      <circle class="path"
              fill="none"
              stroke-width="8"
              stroke-linecap="round"
              cx="35"
              cy="35"
              r="30">
      </circle>
    </svg>
  </div>
</template>
<style lang="sass" rel="stylesheet/scss" scoped>

  $offset: 187;
  $duration: 1s;

  .shade {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #FFF;
    // background-color: rgba(0, 0, 0, 0.3);
    z-index: 9;
  }

  .spinner {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    animation: rotator $duration linear infinite;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  .path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite,
    colors ($duration*4) ease-in-out infinite;
  }

  @keyframes colors {
    0% {
      stroke: #4285F4;
    }
    25% {
      stroke: #DE3E35;
    }
    50% {
      stroke: #F7C223;
    }
    75% {
      stroke: #1B9A59;
    }
    100% {
      stroke: #4285F4;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: $offset;
    }
    50% {
      stroke-dashoffset: $offset/4;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: $offset;
      transform: rotate(450deg);
    }
  }
</style>
