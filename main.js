// let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleTransporter = require('role.transporter');
let roleStationaryHarvester = require('role.stationaryHarvester');
// let roleRepairer = require('role.repairer');
let roles_Harvester = require('role.s_Harvester');
let roleTower = require('role.tower');
let roleCritTransporter = require('role.critTransporter');
let roleLongDistanceHarvester = require('role.longDistanceHarvester');
// let roleScout = require('role.scout');
let roleWallRepairer = require('role.wallRepairer');
let roleLongDistanceTransporter = require('role.longDistanceTransporter');
let roleRemoteBuilder = require('role.remoteBuilder');
// let roleMarine = require('role.marine');
let roleRampartRepairer = require('role.rampartRepairer');
let roleRemoteRepairer = require('role.remoteRepairer');
let roleRemoteHarvesterTwo = require('role.remoteHarvesterTwo')

const HOME = 'E29N43';

module.exports.loop = function () {

    // CLEARING MEMORY OF DEAD CREEPS
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // SETTING MAX COUNT PER ROLE
    const harvestersLength = 0;
    const upgradersLength = 3;
    const buildersLength = 1;
    const transportersLength = 2;
    const stationaryHarvestersLength = 1;
    const s_HarvestersLength = 1;
    const repairersLength = 0;
    const critTransportersLength = 1;
    const longDistanceHarvestersLength = 2;
    const scoutsLength = 0;
    const wallRepairersLength = 0;
    const longDistanceTransportersLength = 3;
    const remoteBuildersLength = 0;
    const marinesLength = 0;
    const rampartRepairerLength = 1;
    const remoteRepairersLength = 1;
    const remoteHarvesterTwosLength = 0;


    //CALCULATE COUNT FOR ABOVE
    // let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
    let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
    let builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
    let transporters = _.filter(Game.creeps, (creep) => creep.memory.role === 'transporter');
    let stationaryHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'stationaryHarvester');
    let s_Harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 's_Harvester');
    // let repairers = _.filter(Game.creeps, (creep) => creep.memory.role === 'repairer');
    let critTransporters = _.filter(Game.creeps, (creep) => creep.memory.role === 'critTransporter');
    let longDistanceHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'longDistanceHarvester');
    // let scouts = _.filter(Game.creeps, (creep) => creep.memory.role === 'scout');
    // let wallRepairers = _.filter(Game.creeps, (creep) => creep.memory.role === 'wallRepairer');
    let longDistanceTransporters = _.filter(Game.creeps, (creep) => creep.memory.role === 'longDistanceTransporter');
    let remoteBuilders = _.filter(Game.creeps, (creep) => creep.memory.role === 'remoteBuilder');
    // let marines = _.filter(Game.creeps, (creep) => creep.memory.role === 'marine');
    let rampartRepairers = _.filter(Game.creeps, (creep) => creep.memory.role === 'rampartRepairer');
    let remoteRepairers = _.filter(Game.creeps, (creep) => creep.memory.role === 'remoteRepairer');
    let remoteHarvesterTwos = _.filter(Game.creeps, (creep) => creep.memory.role === 'remoteHarvesterTwo');


    // ***************** SPAWN CODE ********************* \\

    // HARVERSTER
    // if (harvesters.length < harvestersLength) {
    //     let newName = 'Harvester' + Game.time;
    //     Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE,MOVE], newName,
    //         {memory: {role: 'harvester', working: false}});
    // }

    // CRITICAL TRANSPORTERS (MAIN BASE)
    if (critTransporters.length < critTransportersLength) {
        let newName = 'CritTransporter' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'critTransporter',storage: null, target: null, working: false, isFilled: false}});
    }

    // UPGRADER
    else if (upgraders.length < upgradersLength) {
        let newName = 'Upgrader' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], newName,
            {memory: {role: 'upgrader', working: false}});
    }

   // BUILDER
    else if (builders.length < buildersLength) {
        let newName = 'Builder' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {
                role: 'builder',
                working: false,
                home: HOME,
                target: 'E29N42',
                sourceIndex: 0}});
    }

    // TRANSPORTER
    else if (transporters.length < transportersLength) {
        let newName = 'Transporter' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'transporter', sourceCont: null, working: false}});
    }

    // STATIONARY HARVESTERS
    else if (stationaryHarvesters.length < stationaryHarvestersLength) {
        let newName = 'S_Harvester' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE,MOVE], newName,
            {memory: {role: 'stationaryHarvester', working: false}});
    }

    // STATIC HARVESTERS
    else if (s_Harvesters.length < s_HarvestersLength) {
        let newName = 'S_Harvester1';
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE,MOVE], newName,
            {memory: {role: 's_Harvester', working: false}});
    }

    // LONG DISTANCE HARVESTERS
    else if (longDistanceHarvesters.length < longDistanceHarvestersLength) {
        let newName = 'LDH' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,MOVE,MOVE], newName,
            {memory: {
                role: 'longDistanceHarvester', 
                working: false,
                home: HOME,
                target: 'E29N42',
                sourceIndex: 0}});
    }

    // SCOUTS
    // else if (scouts.length < scoutsLength) {
    //     let newName = 'Scout' + Game.time;
    //     Game.spawns['Spawn1'].spawnCreep([CLAIM,MOVE,MOVE], newName,
    //         {memory: {
    //             role: 'scout',
    //             working: true,
    //             home: HOME,
    //             target: 'E29N44',
    //             sourceIndex: 0}});
    // }

    // WALL REPAIRERS
    // else if (wallRepairers.length < wallRepairersLength) {
    //     let newName = 'WallRepairer' + Game.time;
    //     Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
    //         {memory: {role: 'wallRepairer', working: false}});
    // }

    // LONG DISTANCE TRANSPORTERS
    else if (longDistanceTransporters.length < longDistanceTransportersLength) {
        let newName = 'LDT' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {
                memory: {
                    role: 'longDistanceTransporter',
                    working: false,
                    home: HOME,
                    target: 'E29N42',
                    sourceIndex: 0
                }
            });
    }

    // REMOTE BUILDERS
    else if (remoteBuilders.length < remoteBuildersLength) {
        let newName = 'RemoteBuilder' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {
                memory: {
                    role: 'remoteBuilder',
                    working: false,
                    home: HOME,
                    target1: 'E29N42',
                    target2: 'E28N42',
                    sourceIndex: 0
                }
            });
    }

    // REMOTE REPAIRERS
    else if (remoteRepairers.length < remoteRepairersLength) {
        let newName = 'RemoteRepairer' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {
                memory: {
                    role: 'remoteRepairer',
                    working: false,
                    home: HOME,
                    target: 'E29N42',
                    sourceIndex: 0
                }
            });
    }

    // REPAIRERS
    // else if (repairers.length < repairersLength) {
    //     let newName = 'Repairer' + Game.time;
    //     Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName,
    //         {memory: {role: 'repairer', working: false}});
    // }

    // MARINES
    // else if (marines.length < marinesLength) {
    //     let newName = 'Marine' + Game.time;
    //     Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,ATTACK,MOVE], newName,
    //         {memory: {
    //                 role: 'marine',
    //                 home: HOME,
    //                 mode: 'hold',}});
    // }

    // RAMPART REPAIRERS
    else if (rampartRepairers.length < rampartRepairerLength) {
        let newName = 'RampartRepairer' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'rampartRepairer', working: false}});
    }

    // REMOTE HARVESTER TWO
    else if (remoteHarvesterTwos.length < remoteHarvesterTwosLength) {
        let newName = 'RemoteHarvesterTwo' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {
                    role: 'remoteHarvesterTwo',
                    working: false,
                    home: HOME,
                    target: 'E28N43',
                    sourceIndex: 0}});
    }


    // SPAWN NOTIFICATION AT SPAWN
    // if(Game.spawns['Spawn1'].spawning) {
    //     let spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
    //     Game.spawns['Spawn1'].room.visual.text(
    //         'SPAWNING ' + spawningCreep.memory.role,
    //         Game.spawns['Spawn1'].pos.x + 1,
    //         Game.spawns['Spawn1'].pos.y,
    //         {align: 'left', opacity: 0.8});
    // }

    // RUN TOWER
    let baseTower = Game.getObjectById('5c0ed0d2534f0023fe95c3a3');
    if (baseTower) {
        roleTower.run(baseTower);
    }

    let towerTwo = Game.getObjectById('5c12b1a816dbb85c979bc5e7');
    if (towerTwo) {
        roleTower.run(baseTower);
    }



    // RUN CREEPS
    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        // if(creep.memory.role === 'harvester') {
        //     roleHarvester.run(creep);
        // }
        if(creep.memory.role === 'upgrader') {
            roleUpgrader.run(creep);
        }
        else if(creep.memory.role === 'builder') {
            roleBuilder.run(creep);
        }
        else if (creep.memory.role === 'transporter') {
            roleTransporter.run(creep);
        }
        else if (creep.memory.role === 'stationaryHarvester') {
            roleStationaryHarvester.run(creep);
        }
        // else if (creep.memory.role === 'repairer') {
        //     roleRepairer.run(creep);
        // }
        else if (creep.memory.role === 's_Harvester') {
            roles_Harvester.run(creep);
        }
        else if (creep.memory.role === 'critTransporter') {
            roleCritTransporter.run(creep);
        }
        else if (creep.memory.role === 'longDistanceHarvester') {
            roleLongDistanceHarvester.run(creep);
        }
        // else if (creep.memory.role === 'scout') {
        //     roleScout.run(creep);
        // }
        else if (creep.memory.role === 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        else if (creep.memory.role === 'longDistanceTransporter') {
            roleLongDistanceTransporter.run(creep);
        }
        else if (creep.memory.role === 'remoteBuilder') {
            roleRemoteBuilder.run(creep);
        }
        // else if (creep.memory.role === 'marine') {
        //     roleMarine.run(creep);
        // }
        else if (creep.memory.role === 'rampartRepairer') {
            roleRampartRepairer.run(creep);
        }
        else if (creep.memory.role === 'remoteRepairer') {
            roleRemoteRepairer.run(creep);
        }
        else if (creep.memory.role === 'remoteHarvesterTwo') {
            roleRemoteHarvesterTwo.run(creep);
        }
    }
};