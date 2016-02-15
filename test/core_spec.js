import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next} from '../js/core';

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

    it('converts to immutable', function() {
      const state = Map();
      const entries = ['A New Hope', 'The Empire Strikes Back'];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('A New Hope', 'The Empire Strikes Back')
      }));
    });
  });

  describe('next', function() {

    it('takes the next two entries under vote', function() {
      const state = Map({
        entries: List.of('A New Hope', 'The Empire Strikes Back', 'Return of The Jedi')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('A New Hope', 'The Empire Strikes Back')
        }),
        entries: List.of('Return of The Jedi')
      }));
    });
  });
});
