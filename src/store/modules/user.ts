interface userInfoState{
    userInfo: object
}

export default {
    namespaced: true,
    state: () => ({
        userInfo: {}
    }),
    mutations: {
        setUserInfo(state:userInfoState){
            state.userInfo = {
                token: '1238758599'
            }
        }
    },
    actions: {
        changeUserInfo({ commit, state }: { commit: any, state: any }, payload: any):void{
            commit('setUserInfo')
        }
    }
}
