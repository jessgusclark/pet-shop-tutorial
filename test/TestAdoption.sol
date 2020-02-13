pragma solidity ^0.5.12;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
  // Contract Address
  Adoption adoption = Adoption(DeployedAddresses.Adoption());

  // Test PetId
  uint expectedPetId = 8;

  // expected owner of pet
  address expectedAdopter = address(this);

  // Test the adopt() function
  function testUserCanAdoptPet() public {
    uint returnPetId = adoption.adopt(expectedPetId);

    Assert.equal(
      returnPetId,
      expectedPetId,
      "Return ID should match expectedPetId"
    );
  }

  function testGetAdopterAddressByPetId() public {
    address adopter = adoption.adopters(expectedPetId);

    Assert.equal(
      adopter,
      expectedAdopter,
      "Owner of expected pet should be this contract"
    );
  }

  function testGetAdopterAddressByPetIdAray() public {
    address[16] memory adopters = adoption.getAdopters();
    
    Assert.equal(
      adopters[expectedPetId],
      expectedAdopter,
      "Owner of the expected pet should be this contract"
    );
  }

}