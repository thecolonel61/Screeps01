let roleScout = {

    run: function (creep) {
        // if(creep.room.controller) {
        //     if(creep.signController(creep.room.controller, "Si Vis Pacem Para Bellum!") == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(creep.room.controller);
        //     }
        // }

        creep.memory.target = 'E29N43';

        if (creep.room.name === creep.memory.target) {
            let target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES)
            if (target) {
                if (creep.attack(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }

        if (creep.room.name === creep.memory.target) {
            let roomController = creep.room.controller;
            // console.log(roomController);
            if (creep.room.controller && !creep.room.controller.my) {

                // console.log('GOING TO CLAIM');
                if (creep.attackController(roomController) === ERR_NOT_IN_RANGE) {

                    console.log('I am here');
                    creep.moveTo(roomController, {visualizePathStyle: {stroke: '#ff0e18'}})
                }
            }
        } else if (creep.room.name === creep.memory.home) {
            // locate exit from main room
            let exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
        }
    }
};

module.exports = roleScout;