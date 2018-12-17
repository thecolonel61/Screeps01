let roleLongDistanceTransporter = {

    run: function (creep) {

        let container1 = Game.getObjectById('5c1481b984fc1e52e91c5521');
        let container2 = Game.getObjectById('5c160e3ed2d94652c60ef5ae');


        // SET WORKING STATE
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        } else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }


        if (creep.memory.working === true) {

            // if in home room
            if (creep.room.name === creep.memory.home) {

                let structure = Game.getObjectById('5c10172ced4dcc244c6c0f25');

                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            } else if (creep.room.name === creep.memory.target) {
                // IF NOT IN HOME ROOM MOVE TO HOME ROOM
                let exit = creep.room.findExitTo(creep.memory.home);
                // and move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit));
            }
        } else {
            // if in target room
            if (creep.room.name === creep.memory.target) {


                if (container1.store.energy >= container2.store.energy) {


                    if (creep.withdraw(container1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        // move towards the source
                        creep.moveTo(container1);
                    }
                }

                if (container2.store.energy > container1.store.energy) {
                    if (creep.withdraw(container2, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        // move towards the source
                        creep.moveTo(container2);
                    }
                }
            } else {
                let exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByPath(exit));
            }
        }
    }
};



module.exports = roleLongDistanceTransporter;
