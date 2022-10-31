export const pageAnimation = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  }
  
  type Islide = {
    x: string
    opacity: number
  }
  
  export const slideAnimation = {
    enter: (direction: number): Islide => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
      }
    },
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (direction: number): Islide => {
      return {
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
      }
    },
  }

export const galleryAnimation = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: 'easeOut',
        delayChildren: 1.5,
      },
    },
  }
  
 
  
  export const captionAnimation = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 2,
      },
    },
  }
  
  export const cardAnimation = (delay: number) => {
    return {
      hide: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          duration: .5,
         delay: delay / 8
        },
      },
    }
  }
  