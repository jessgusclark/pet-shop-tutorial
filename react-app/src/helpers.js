export const isPetOwned = (addr) => {
  if (addr === '0x0000000000000000000000000000000000000000'){
    return false
  }

  return true;
}