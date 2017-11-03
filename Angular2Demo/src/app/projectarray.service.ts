import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        const PROJECTS = [

            { id: 0, name: 'Null', size: 0, price: 0, construction_date: 'Null' },

            { id: 1, name: 'ABC', size: 3, price: 45000, construction_date: '3-1-2017' },

            { id: 2, name: 'DEF', size: 3, price: 45000, construction_date: '3-1-2017' },

            { id: 3, name: 'GHI', size: 3, price: 45000, construction_date: '3-1-2017' },

            { id: 4, name: 'IJK', size: 3, price: 45000, construction_date: '3-1-2017' },

            { id: 5, name: 'LM', size: 3, price: 45000, construction_date: '3-1-2017' }



        ];
        return {PROJECTS};
    }

}