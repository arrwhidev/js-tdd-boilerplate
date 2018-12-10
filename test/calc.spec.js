import { expect } from 'chai'
import { foo } from '../src/calc'

describe('calc', () => {
    it('should return `bar`', () => {
        expect(foo()).to.equal('bar')
    })
});