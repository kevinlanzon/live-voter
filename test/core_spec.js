import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries} from '../js/core';

describe('app logic', function() {

  describe('setEntries', function() {

    it('add the entries to the state', function() {
      const state = Map();
      const entries = List.of('A New Hope', 'The Empire Strikes Back');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('A New Hope', 'The Empire Strikes Back')
      }));
    });
  });
});
