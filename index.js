#! /usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';

const title = chalk.bold.greenBright('davegill.dev');
const aboutMe = chalk.green('Hey there I\'m ' + chalk.bold.greenBright('Dave') + '. I am a ' + chalk.bold.greenBright('software dev') + ' and ' + chalk.bold.greenBright('CTO') +'.');

const accolades = chalk.cyan(
    '• CTO at ' + chalk.bold('Hyperglance Inc.') + 
    '\n• Creator of ' + chalk.bold('TeamFeels.app') + 
    '\n• Creator of ' + chalk.bold('Slantt.co'));

const findMeOnline =
    chalk.green('Find me the World Wide Web:\n\n') +
    ' ' + chalk.bold.hex('#000').bgGreen('  Website ') + chalk.cyan('   https://davegill.dev\n') +
    ' ' + chalk.bold.hex('#000').bgWhite('   GitHub ') + chalk.cyan('   https://github.com/daveagill\n') +
    ' ' + chalk.bold.hex('#000').bgHex('#1da1f2')('  Twitter ') + chalk.cyan('   https://twitter.com/DaveAGill\n') +
    ' ' + chalk.bold.hex('#000').bgHex('#007bb5')(' LinkedIn ') + chalk.cyan('   https://linkedin.com/in/daveagill');

const bye =  chalk.green('Cya!');

console.log(
    boxen(aboutMe + '\n\n' + accolades + '\n\n\n' + findMeOnline + '\n\n' + bye,
        {
            title,
            titleAlignment: 'center',
            padding: 1,
            margin: 1, 
            borderStyle: 'round',
            borderColor: 'green',
            float: 'center'
        }
    )
);
