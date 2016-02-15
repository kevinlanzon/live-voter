import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', function() {

  describe('a number', function() {

    function increment(currentState) {
      return currentState + 1;
    }

     describe('a tree', function() {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', function() {
      let state = Map({
        movies: List.of('A New Hope', 'The Empire Strikes Back')
      });
      let nextState = addMovie(state, 'Return of The Jedi');
        expect(state).to.equal(Map({
          movies: List.of(
            'A New Hope',
            'The Empire Strikes Back')
        }));
        expect(nextState).to.equal(Map({
          movies: List.of(
            'A New Hope',
            'The Empire Strikes Back',
            'Return of The Jedi')
        }));
      });
    });
  });
});