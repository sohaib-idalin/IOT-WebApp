'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Vehicles', [
      {
        brand: "Range Rover",
        licensePlateNumber: "77143 d 6",
        ParkingUserId:1,
      },
      {
        brand: "Renault",
        licensePlateNumber: "97695 d 6",
        ParkingUserId:2,
      },
      {
        brand: "Dacia",
        licensePlateNumber: "57631 b 8",
        ParkingUserId:3,
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Vehicles', null, {});
    
  }
};
