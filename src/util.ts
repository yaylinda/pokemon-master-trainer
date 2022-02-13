/**
 * 
 * @param min 
 * @param max 
 * @returns 
 */
 export const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (Math.floor(max) -  Math.ceil(min)) +  Math.ceil(min));
  }