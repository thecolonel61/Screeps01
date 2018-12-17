let roleMarine = {



    run: function (creep) {



        //MODE SWITCHER:

        // 1 = ATTACK
        // 2 = RETREAT
        // 3 = HOLD

        let mode  = 1;



        // SET ATTACK MODE
        if(mode === 1) {
            creep.memory.mode = 'attack';
        }
        // SET RETREAT MODE
        else if(mode === 2) {
            creep.memory.mode = 'retreat';
        }
        // SET HOLD MODE
        else if(mode === 3) {
            creep.memory.mode = 'hold';
        }


        // SET ROOM TARGETS HERE
        let target = {
            room1: 'E29N42',
            room2: 'E28N42',
            mainTarget: 'E29N44'
        };

        if(creep.room.name === target.room2) {
            creep.move(26,24, {visualizePathStyle: {stroke: '#ff0e18'}})
        }


        // If in ATTACK MODE
        if(creep.memory.mode === 'attack') {

            if(creep.room.name === target.mainTarget){

                // Locate Enemy Spawn
                let spawn = creep.pos.findClosestByRange(FIND_HOSTILE_SPAWNS);
                // Locate Enemy Structures
                let structure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES && FIND_HOSTILE_STRUCTURES);
                let target = Game.getObjectById('5c14b123653d381d7a03fd30');
                let roomController = creep.room.controller;


                if(spawn !== null || spawn !== undefined) {
                    if(creep.attack(spawn) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(spawn, {visualizePathStyle: {stroke: '#ff0e18'}});
                    }
                }

                // if(structure != null || structure !== undefined && spawn === null && structure.structureType !== roomController.structureType ) {
                //
                //     console.log('I am at: ' + structure);
                //
                //     if(creep.attack(structure) === ERR_NOT_IN_RANGE) {
                //         creep.moveTo(structure, {visualizePathStyle: {stroke: '#ff0e18'}});
                //     }
                // }

                if(target !== null || target !== undefined) {
                    if(creep.attack(target) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {visualizePathStyle: {stroke: '#ff0e18'}});
                    }
                }





            }
            else {
                if(creep.room.name === creep.memory.home) {
                    // locate exit from main room
                    let exit = creep.room.findExitTo(target.mainTarget);
                    // move to exit
                    creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
                }
                //
                // else if(creep.room.name === target.home) {
                //     // locate exit from room one
                //     let exit = creep.room.findExitTo(target.room2);
                //     // move to exit
                //     creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
                // }
                // else if(creep.room.name === target.room2) {
                //     // locate exit from room 2
                //     let exit = creep.room.findExitTo(target.mainTarget);
                //     // move to exit
                //     creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
                // }
            }
        }

        // If in RETREAT MODE
        else if(creep.memory.mode === 'retreat') {

            if(creep.room.name === target.mainTarget) {
                // locate exit from main room
                let exit = creep.room.findExitTo(target.room2);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
            }

            else if(creep.room.name === target.room2) {
                // locate exit from room one
                let exit = creep.room.findExitTo(target.room1);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
            }
            else if(creep.room.name === target.room1) {
                // locate exit from room 2
                let exit = creep.room.findExitTo(creep.memory.home);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
            }

            else if (creep.room.name === creep.memory.home) {
                creep.moveTo(14,4, {visualizePathStyle: {stroke: '#FFFF00'}});
            }

        }

        // If in HOLD MODE
        else if(creep.memory.mode === 'hold') {



            if(creep.room.name === target.mainTarget) {
                console.log('I am here')
                if(creep.pos !== 32,17) {
                    creep.moveTo(32,17, {visualizePathStyle: {stroke: '#FFFF00'}});
                }
            }

            else if(creep.room.name === creep.memory.home) {
                if(creep.pos !== 14,2) {
                    creep.moveTo(14,2, {visualizePathStyle: {stroke: '#FFFF00'}});
                }
            }

            else{
                if(creep.room.name === creep.memory.home) {
                    // locate exit from main room
                    let exit = creep.room.findExitTo(target.room1);
                    // move to exit
                    creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
                }

                else if(creep.room.name === target.room1) {
                    // locate exit from room one
                    let exit = creep.room.findExitTo(target.room2);
                    // move to exit
                    creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
                }
                else if(creep.room.name === target.room2) {
                    // locate exit from room 2
                    let exit = creep.room.findExitTo(target.mainTarget);
                    // move to exit
                    creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
                }
            }
        }

        else {
            if(creep.room.name === creep.memory.home) {
                // locate exit from main room
                let exit = creep.room.findExitTo(target.room1);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
            }

            else if(creep.room.name === target.room1) {
                // locate exit from room one
                let exit = creep.room.findExitTo(target.room2);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
            }
            else if(creep.room.name === target.room2) {
                // locate exit from room 2
                let exit = creep.room.findExitTo(target.mainTarget);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#FFFF00'}});
            }
        }





    }
};

module.exports = roleMarine;