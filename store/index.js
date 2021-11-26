import STATUS_TYPES from './config/statusTypes'
import { parsesJSON } from './utils'

const state = () => ({
    restaurantes: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    restaurante: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    prevNext: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    readMore: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    }
});
/* All states mutations */
const mutations = {
    GET_RESTAURANTES(state, payload) {
        state.restaurantes.data = payload
        state.restaurantes.status = STATUS_TYPES.SUCCESS
    },
    GET_RESTAURANTE(state, payload) {
        state.restaurante.data = payload
        state.restaurante.status = STATUS_TYPES.SUCCESS
    },
    GET_READ_MORE(state, payload) {
        state.readMore.data = payload
        state.readMore.status = STATUS_TYPES.SUCCESS
    },
    GET_PREV_NEXT(state, payload) {
        state.prevNext.data = payload
        state.prevNext.status = STATUS_TYPES.SUCCESS
    }
};
/* All states getters */
const getters = {
    getRestaurantes: (state) => parsesJSON(state.restaurantes),
    getRestaurante: (state) => parsesJSON(state.restaurante),
    getPrevNext: (state) => parsesJSON(state.prevNext),
    getReadMore: (state) => parsesJSON(state.readMore)
};
/* All states actions */
const actions = {
    async getRestaurantes({ commit }, params, callback) {
        const storeRestaurantes = await this.$content('Restaurantes')
            .fetch()
        commit('GET_RESTAURANTES', storeRestaurantes)
    },
    async getRestaurante({ commit }, params, callback) {
        const storeRestaurante = await this.$content('Restaurantes', params.slug).fetch()
        console.log(storeRestaurante);
        commit('GET_RESTAURANTE', storeRestaurante)
    },	
    async getPrevNext({ commit }, params, callback) {
        const [prev, next] = await this.$content('Restaurantes')
            .surround(params.slug)
            .fetch()
        commit('GET_PREV_NEXT', { prev, next })
    },
    async getReadMore({ commit }, params, callback) {
        const storeReadMore = await this.$content('Restaurantes')
            .where({
                slug: { $ne: params.slug },
            })
            .limit(3)
            .fetch()
        commit('GET_READ_MORE', storeReadMore)
    }
};
/* Export all stores */
export default {
    state,
    mutations,
    getters,
    actions
}