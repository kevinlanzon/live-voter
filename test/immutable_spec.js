import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', function() {

  describe('a number', function() {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', function() {
      let state = 1;
      let nextState = increment(state);
      expect(state).to.equal(1);
      expect(nextState).to.equal(2);
    });
  });

  describe('a list', function() {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', function() {
      let state = List.of('A New Hope', 'The Empire Strikes Back');
      let nextState = addMovie(state, 'Return of The Jedi');
      expect(state).to.equal(List.of(
        'A New Hope',
        'The Empire Strikes Back'
      ));
      expect(nextState).to.equal(List.of(
        'A New Hope',
        'The Empire Strikes Back',
        'Return of The Jedi'
      ));
    });
  });
});