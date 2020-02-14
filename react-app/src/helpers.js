export const isPetOwned = (addr) => {
  if (addr === '0x0000000000000000000000000000000000000000'){
    return false
  }

  return true;
}

export const isOwner = (currentAddress, petOwner) => {
  if (petOwner === currentAddress){
    return true;
  }

  return false;
}
