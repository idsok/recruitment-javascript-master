"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai = require("chai");
const data_1 = require("../../data");
const filter_1 = require("../../lib/commands/filter");
const expect = chai.expect;
const assert = chai.assert;
describe('Filter command', () => {
    it('Check the number of countries and the number of people', () => {
        const filterCommand = new filter_1.FilterCommand();
        const result = filterCommand.execute(data_1.data);
        expect(result.length, 'Number countries not equals 2').eq(2);
        expect(result[0].people.length, 'Number people not equals 1').eq(1);
        expect(result[1].people.length, 'Number people not equals 1').eq(1);
        expect(result[0].people[0].animals.length, 'Number animals not equals 1').eq(1);
        expect(result[1].people[0].animals.length, 'Number animals not equals 1').eq(1);
    });
});