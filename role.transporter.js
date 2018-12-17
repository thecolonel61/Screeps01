let roleTransporter = {

    run: function (creep) {

        let container1 = Game.getObjectById('5c11c3b937b4fd5c928312fe');
        let container2 = Game.getObjectById('5c11d05b9b6cb123fd3feaa2');
        let container3 = Game.getObjectById('5c159ad151062f1d965e2965')
        let storage = Game.getObjectById('5c10172ced4dcc244c6c0f25');


        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working === true && creep.carry.energy === 0) {
            // switch state
            creep.memory.working = false;
        }


        // CHOOSE CONTAINER BASED ON HOW FULL
        if (creep.memory.sourceCont === null) {
            if (container1.store.energy >= container2.store.energy) {
                creep.memory.sourceCont = '5c11c3b937b4fd5c928312fe';
            } else {
                creep.memory.sourceCont = '5c11d05b9b6cb123fd3feaa2';
            }
        }



        // if creep is harvesting energy but is full
        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working === true) {

            creep.memory.sourceCont = null;


            // find closest spawn, extension or tower which is not full
            let structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType === STRUCTURE_SPAWN
                    || s.structureType === STRUCTURE_EXTENSION)
                    // || s.structureType === STRUCTURE_TOWER)
                    && s.energy < s.energyCapacity
            });

            if (structure === undefined || structure === null) {
                structure = storage;
            }

            if (structure === storage) {
                if (creep.transfer(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(storage);
                }
            }

            // if we found one
            if (structure !== undefined) {

                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            }
        }

        // if creep is supposed to get energy
        else {
            let destination = creep.memory.sourceCont;
            destination = Game.getObjectById(destination);
            console.log(destination);

            if (creep.withdraw(destination, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(destination, {visualizePathStyle: {stroke: '#ff0e18'}});
            }
        }
    }
};

module.exports = roleTransporter;


// if (creep.memory.working === false && creep.carry.energy < creep.carryCapacity) {
//
//     let target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
//     if(target){
//         console.log(target);
//         if(creep.pickup(target) === ERR_NOT_IN_RANGE) {
//             creep.moveTo(target, {visualizePathStyle: {stroke: '#ff0e18'}});
//         }
//     }
// }


// let destination = Game.getObjectById('5c11c3b937b4fd5c928312fe');