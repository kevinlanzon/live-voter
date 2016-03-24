import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next, vote} from '../js/core';

describe('app logic', () => {

  describe('#setEntries', () => {

    it('add the entries to the state', () => {
      const state = Map();
      const entries = List.of('A New Hope', 'The Empire Strikes Back');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('A New Hope', 'The Empire Strikes Back')
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['A New Hope', 'The Empire Strikes Back'];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('A New Hope', 'The Empire Strikes Back')
      }));
    });
  });

  describe('#next', () => {

    it('takes the next two entries under vote', () => {
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
   describe('#vote', () => {

    it('creates a tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('A New Hope', 'The Empire Strikes Back')
        }),
        entries: List()
      });
      const nextState = vote(state, 'A New Hope');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('A New Hope', 'The Empire Strikes Back'),
          tally: Map({
            'A New Hope': 1
          })
        }),
        entries: List()
      }));
    });

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('A New Hope', 'The Empire Strikes Back'),
          tally: Map({
            'A New Hope': 3,
            'The Empire Strikes Back': 2
          })
        }),
        entries: List()
      });
      const nextState = vote(state, 'A New Hope');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('A New Hope', 'The Empire Strikes Back'),
          tally: Map({
            'A New Hope': 4,
            'The Empire Strikes Back': 2
          })
        }),
        entries: List()
      }));
    });
  });
});
