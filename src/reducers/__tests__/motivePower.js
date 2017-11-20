

import reducer, { motivePowerActions } from '../motivePower'

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


describe( 'default state from reducer', () => {

	it( 'Should return a state with all items blank', () => {

        const state = reducer( undefined, undefined );

        expect( state ).not.toBeNull();

        expect( state ).toHaveProperty( 'id')
        expect( state ).toHaveProperty( 'scac')
        expect( state ).toHaveProperty( 'number')
        expect( state ).toHaveProperty( 'unitType')
        expect( state ).toHaveProperty( 'comment')
        expect( state ).toHaveProperty( 'model')
        expect( state ).toHaveProperty( 'model.manufacturer')
        expect( state ).toHaveProperty( 'decoder')
        expect( state ).toHaveProperty( 'decoder.address')
        expect( state ).toHaveProperty( 'decoder.family')
        expect( state ).toHaveProperty( 'decoder.model')
        expect( state ).toHaveProperty( 'decoder.comment')
        expect( state ).toHaveProperty( 'decoder.filename')

		expect( state ).toEqual( defaultState );
	})
})

describe( 'resetToDefault should blank all properties', () => {

    it( 'Should return a state with all items blank', () => {

        const state = reducer( {id: '1234', scac: 'abcd'}, motivePowerActions.resetToDefaults() );

        expect( state ).not.toBeNull();

        expect( state ).toHaveProperty( 'id', '' )
        expect( state ).toHaveProperty( 'scac', '' )
        expect( state ).toHaveProperty( 'number', '' )
        expect( state ).toHaveProperty( 'unitType', '' )
        expect( state ).toHaveProperty( 'comment', '' )
        expect( state ).toHaveProperty( 'model')
        expect( state ).toHaveProperty( 'model.manufacturer', '' )
        expect( state ).toHaveProperty( 'decoder' )
        expect( state ).toHaveProperty( 'decoder.address', '' )
        expect( state ).toHaveProperty( 'decoder.family', '' )
        expect( state ).toHaveProperty( 'decoder.model', '' )
        expect( state ).toHaveProperty( 'decoder.comment', '' )
        expect( state ).toHaveProperty( 'decoder.filename', '' )

        expect( state ).toEqual( defaultState );
    })
})

describe( 'A change to the Road Name property', () => {

    it( 'Should return a new state with the updated road name and id', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeRoadName( 'EL', state ) );

        expect( state ).toHaveProperty( 'scac', 'EL' )
        expect( state ).toHaveProperty( 'number', 5680 )
        expect( state ).toHaveProperty( 'id', 'EL 5680' )
    })
})


describe( 'A change to the Road Number property', () => {

    it( 'Should return a new state with the updated road number and id', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeRoadNumber( 9876, state ) );

        expect( state ).toHaveProperty( 'scac', 'abcd' )
        expect( state ).toHaveProperty( 'number', 9876 )
        expect( state ).toHaveProperty( 'id', 'abcd 9876' )
    })
})

