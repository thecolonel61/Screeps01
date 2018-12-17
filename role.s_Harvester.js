let roles_Harvester = {

    run: function (creep) {


        creep.memory.working = false;
        let source = Game.getObjectById('5bbcaea09099fc012e63956b');
        if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }


        // // If Creep working = true and has no carry energy set working = false
        // if (creep.memory.working === true && creep.carry.energy === 0) {
        //     creep.memory.working = false;
        // }
        //
        // else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
        //     creep.memory.working = true;
        // }
        //
        //
        // if (creep.memory.working === true) {
        //
        //     // DEFINE PRIMARY CONTAINER
        //     let primaryContainer = Game.getObjectById('5c0ef2817c8e195cd3379c7d');
        //
        //
        //     // let primaryContainer = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {
        //     //         return (structure.structureType === STRUCTURE_CONTAINER)}});
        //     // console.log(`Container1: ${primaryContainer[0]}`);
        //     // console.log(`Container2: ${primaryContainer[1]}`);
        //     if (creep.transfer(primaryContainer, 'energy') === ERR_NOT_IN_RANGE){
        //         creep.moveTo(primaryContainer)
        //     }
        // }
        //
        // else {
        //     //let source = creep.pos.findClosestByPath(FIND_SOURCES);
        //    // let source = creep.pos.findClosestByRange(FIND_SOURCES);
        //     let source = Game.getObjectById('5bbcaea09099fc012e63956b');
        //     if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
        //         creep.moveTo(source);
        //     }
        // }
    }

};

module.exports = roles_Harvester;