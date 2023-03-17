export const textVariant = (delay: number) => {
  return {
    enter: {
      y: -50,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 100,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    enter: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    visibleOnce: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    enter: {
      scale: 0,
      opacity: 0,
    },
    visibleOnce: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction?: string,
  type?: string,
  delay?: number,
  duration?: number
) => {
  return {
    enter: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    visibleOnce: {
      x: 0,
      y: 0,
      transition: {
        type: type ? type : "spring",
        delay: delay ? delay : 0,
        duration: duration ? duration : 100,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
