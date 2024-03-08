module.exports = (objetoParams) => {
  for (let i in objetoParams) {
    if (/Id|id/.test(i)) {
      objetoParams[i] = Number(objetoParams[i]);

    }
  }
  return objetoParams;
};
