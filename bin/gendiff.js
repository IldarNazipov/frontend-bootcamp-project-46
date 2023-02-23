#!/usr/bin/env node
import { program } from 'commander';

program
    .version("1.0.0")
    .description('Compares two configuration files and shows a difference.')
    .helpOption('-h, --help', 'display help for command')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>');
    
program.parse(process.argv);