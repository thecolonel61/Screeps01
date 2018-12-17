let roleBuilder = require("role.builder");
let roleHarvester = {

    run: function (creep) {

        let targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType === STRUCTURE_EXTENSION
                    || structure.structureType === STRUCTURE_SPAWN
                    || structure.structureType === STRUCTURE_TOWER)
                    && structure.energy < structure.energyCapacity;}})
 

        // If Creep working = true and has no carry energy set working = false
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        }

        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }
        
        if (creep.memory.working === true) {
            if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#FFFFFF'}});
            }
            
            else if (creep.memory.working === true){
                roleBuilder.run(creep);
            }
            
            }

            else {
                let sources = Game.getObjectById('5bbcaea09099fc012e63956b');
                if (creep.harvest(sources, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources);
                }
            }
        }
        
        
        // else {
        //     let sources = creep.room.find(FIND_SOURCES);
        //     if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#FFFFFF'}});
        //     }
        // }
    

};

module.exports = roleHarvester;