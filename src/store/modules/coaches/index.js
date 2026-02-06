

import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default {
    namespaced: true,
    state(){
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: "omama",
                    lastName: 'int',
                    areas: ['fe', 'be', 'db', 'mb'],
                    description: 'Hello I am Coach 1',
                    hourlyRate: 30,
                },
                {
                    id: 'c2',
                    firstName: "maqrij",
                    lastName: 'int' ,
                    areas: ['fe', 'be', 'db', 'mb', 'civil'],
                    description: 'Hello I am Coach 1',
                    hourlyRate: 40,
                }
            ]
        }
    },
    actions, 
    mutations,
    getters
}