import _ from 'underscore'
function findById (state, id) {
    return _.findWhere(state.shoppinglists, { id: id })
}