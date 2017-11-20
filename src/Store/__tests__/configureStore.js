
import configureStore from '../configureStore'


describe( 'default state of the store', () => {

	it( 'Should contain a state with all items blank', () => {

		const store = configureStore();
		expect( store ).not.toBeNull();

        const state = store.getState();
		expect( state ).not.toBeNull();


        // Ensure the desired properties exist
		expect( state ).toHaveProperty( 'motivePower')
        expect( state ).toHaveProperty( 'motivePower.id')
        expect( state ).toHaveProperty( 'motivePower.scac')
        expect( state ).toHaveProperty( 'motivePower.number')
        expect( state ).toHaveProperty( 'motivePower.unitType')
        expect( state ).toHaveProperty( 'motivePower.comment')
        expect( state ).toHaveProperty( 'motivePower.model')
        expect( state ).toHaveProperty( 'motivePower.model.manufacturer')
        expect( state ).toHaveProperty( 'motivePower.decoder')
        expect( state ).toHaveProperty( 'motivePower.decoder.address')
        expect( state ).toHaveProperty( 'motivePower.decoder.family')
        expect( state ).toHaveProperty( 'motivePower.decoder.model')
        expect( state ).toHaveProperty( 'motivePower.decoder.comment')
        expect( state ).toHaveProperty( 'motivePower.decoder.filename')

		
        // And there is nothing else but desired properties in the slice
        const defaultState = {
            id: "",
            scac:  "",
            number:  "",
            unitType:  "",
            comment:  "",
            model: {
                manufacturer: "",
            },
            decoder: {
                address:  "",
                family:  "",
                model:  "",
                comment:  "",
                filename:  "",
            },
        };

        expect( store.getState().motivePower ).toEqual( defaultState );
	})
})


