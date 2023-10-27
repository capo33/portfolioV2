export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (caracter: string) {
      const random = (Math.random() * 16) | 0,
        value = caracter === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    }
  );
};
