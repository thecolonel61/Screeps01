let rolecritTransporter = {

    run: function (creep) {

        // Adjust isWorking State

        // If Creep working = true and has no carry energy set working = false
        if (creep.memory.working === true && creep.carry.energy === 0) {
            // Switch State
            creep.memory.working = false;
        }

        // If Creep isWorking is False, but has full energy capacity set working = true
        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // If creep has full energy capacity start working
        if (creep.memory.working === true) {

            // Find structures closest to creep
            let structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType === STRUCTURE_SPAWN
                    || s.structureType === STRUCTURE_EXTENSION
                    || s.structureType === STRUCTURE_TOWER)
                    && s.energy < s.energyCapacity
            });



            if (structure !== null) {

                // IF THE STRUCTURE IS A SPAWN SUPPLY IT WITH ENERGY
                if (structure.structureType === STRUCTURE_SPAWN) {

                    if (structure.energy < structure.energyCapacity) {
                        creep.memory.target = '5c0dc6b1689bbc0b176e35f6';

                        let spawn1 = Game.getObjectById(creep.memory.target);

                        if (creep.transfer(spawn1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.moveTo(spawn1);
                        }
                    }
                }
                // IF STRUCTURE IS AN EXTENSION SUPPLY IT WITH ENERGY
                else if (structure.structureType === STRUCTURE_EXTENSION) {

                    if (structure.energy < structure.energyCapacity) {
                        creep.memory.target = structure;

                        if (creep.transfer(creep.memory.target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.memory.target);
                        }
                    }

                } else if (structure.structureType === STRUCTURE_TOWER) {
                    if (structure.energy < structure.energyCapacity) {
                        creep.memory.target = structure;
                        if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.memory.target);
                        }
                    }
                }
            }


        } else {
            let container1 = Game.getObjectById('5c11c3b937b4fd5c928312fe');

            if (container1.store.energy > 200) {
                if (creep.withdraw(container1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(container1);
                }
            } else {
                let storage = creep.room.storage;
                if (creep.withdraw(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(storage);
                }
            }

        }
    }
};

module.exports = rolecritTransporter;