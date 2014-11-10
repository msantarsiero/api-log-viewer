import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { description: 'first event' },
      { description: 'second event' },
      { description: 'third event' }
    ]
  }

});
