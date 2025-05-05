declare module 'animated-backgrounds' {
  interface AnimatedBackgroundProps {
    animationName: string;
    blendMode?: string;
    config?: {
      starCount?: number;
      starSize?: number;
      starOpacity?: number;
    };
  }

  export const AnimatedBackground: React.FC<AnimatedBackgroundProps>;
}