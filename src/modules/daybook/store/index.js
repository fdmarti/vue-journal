
export default{
    namespaced : true,

    state:{
        isLoading : true,
        entries : [
            {
                id : new Date().getTime(),
                date : new Date().toDateString(),
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing eliipsum dolor sit amet, consectetur t. Nullam id ipsum lectus. Ut sed augue ante.',
                picture : null
            },
            {
                id : new Date().getTime() + 1000,
                date : new Date().toDateString(),
                text : 'Lorem ipsum dolor sit amet, consectetur  ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum lectus. Ut sed augue ante.',
                picture : null
            },
            {
                id : new Date().getTime() + 2000,
                date : new Date().toDateString(),
                text : 'Lorem ipsum dolor sit amet, consectetur  ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum lectus. Ut sed augue ante.',
                picture : null
            },
        ]
    },

    mutations:{
        setEntries(/*state*/){

        },

        updateEntry(/*state*/){

        },

        addEntry(/*state*/){

        },
    },

    actions:{
        async loadEntry (/*{commit}*/){

        },

        async updateEntry (/*{commit}*/){

        },

        async createEntry (/*{commit}*/){

        },
    },

    getters:{
        getEntriesByTerm(/*state*/){

        },

        getEntryById(/*state*/){

        },
    }
}