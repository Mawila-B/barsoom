import * as core from '@actions/core';

const nameToGreet = core.getInput('name');
const output_value = `Hello $(name)`;
core.setOutput('greeting',output_value);