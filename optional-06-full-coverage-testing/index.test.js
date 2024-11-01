import { describe, it, test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Test sum function', () => {
    it('sum must get numbers', () => {
        const operandA = 'a';
        const operandB = 1;

        const actualValue = sum(operandA, operandB);

        const expectedValue = false;
        assert.equal(actualValue, expectedValue);
    });

    it('sum must get positive numbers', () => {
        const operandA =  -1;
        const operandB = 1;

        const actualValue = sum(operandA, operandB);

        const expectedValue = false;
        assert.equal(actualValue, expectedValue);
    });
    
    it('sum correctly', () => {
        const operandA =  3;
        const operandB = 3;

        const actualValue = sum(operandA, operandB);

        const expectedValue = 6;
        assert.equal(actualValue, expectedValue);
    });
});