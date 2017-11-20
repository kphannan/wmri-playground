import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { motivePowerActions } from '../reducers/motivePower'
import { Form, Control, Errors } from 'react-redux-form'
// import { Form, Control, Errors, actions } from 'react-redux-form'

class MotivePower extends Component {

  // constructor(props) {
  //   super(props)
  //   // this.props = props;
  //   // console.log( 'props in ctor')
  //   // console.log( props );
  // }

  savePower() {
    console.log( 'save Power')
    this.props.actions.saveMotivePower();
    // dispatch( motivePowerActions.saveMotivePower(), event );
    // case 'ADD_POWER':
    //   return [{
    //       text: action.text,
    //       completed: false,
    //       id: getId(todos)
    //     }, ...todos]

  }

  handleResetToDefaults() {
    this.props.actions.resetToDefaults();
  }

  deletePower() {
    console.log( 'Delete Power')
    // case 'DELETE_POWER':
    //   return
    //     todos.filter((todo) => {
    //       return todo.id !== action.id
    //     })

  }

  handleUnitIdChange(event) {
    // console.log( 'handleUnitIdChange')
    console.log( event )
    console.log( event.target )
    this.setState({
      id: event.target.value
    })
  }

  handleRoadNameChange(event) {
    this.props.actions.changeRoadName( event.target.value, this.props.motivePower );
  }

  handleRoadNumberChange(event) {
    this.props.actions.changeRoadNumber( event.target.value, this.props.motivePower );
  }


            // validLdap: 'Owner LDAP must be a valid ID',
            // required: 'Owner LDAP is required'

          // <Control.text
          //          model=".scac"
          //          id='roadName_id'       
          //          type='text'
          //          placeholder="Road name"
          //          value={this.props.motivePower.scac}
          //          onChange={this.handleRoadNameChange.bind(this)}
          //          debounce={600}
          //          validateOn="change"
          //          validators={{
          //            minLength: (val) => (val.length > 1 ),
          //            maxLength: (val) => (val.length <= 5),
          //            validChars: (val) => /^[a-zA-Z]+$/i.test(val) || val === "",
          //          }}
          // />

          // <Errors
          //   model="motivePower.scac"
          //   show={{pristine: false}}
          //   wrapper={(props) => <div className="text-input-container error">{props.children}</div>}
          //   component={(props) => <p className="error-msg">{props.children}</p>}
          //   messages={{
          //     minLength: 'Road name must be at least 1 character',
          //     maxLength: 'Road name must not be more than 6 characters',
          //     validChars: (val) => `The given road name of "${val}" has non-alpha characters`,
          //   }}
          // />



  render() {
    // const { loco } = this.props;
    // console.log( this.props.motivePower );
    // console.log( this.state );
    return (
      <Form model="motivePower" autoComplete="off">
      <ul>
        <li> ID:
          <input id='unit_id'           
                 type='text'
                 placeholder="Road Name + Number"
                 value={this.props.motivePower.id}
                 onChange={this.handleUnitIdChange.bind(this)}
          />
        </li>
        <li> Road Name:
          <input
                   id='roadName_id'       
                   type='text'
                   placeholder="Road name"
                   value={this.props.motivePower.scac}
                   onChange={this.handleRoadNameChange.bind(this)}
          />

        </li>
        <li> Road Number:     
          <input id='roadNumber_id'     
                 type='text'
                 placeholder="Unit Number"
                 value={this.props.motivePower.number}
                 onChange={this.handleRoadNumberChange.bind(this)}
        />
        </li>

        <li> Model:           
          <input id='model_id'          
                 type='text'
                 placeholder="Locomotive Model"
                 value={this.props.motivePower.unitType}/>
        </li>

        <li> Comment:         
          <input id='comment_id'        
                 type='text'
                 placeholder="Comment"
                 value={this.props.motivePower.comment}/>
        </li>

        <li> Manufacturer:    
          <input id='manufacturer_id'   
                 type='text'
                 placeholder='Model manufacturer'
                 value={this.props.motivePower.model} />
        </li>


        <li> DCC Address:     
          <input id='dccAddress_id'     
                 type='text'
                 placeholder="DCC unit address"
                 value={this.props.motivePower.decoder.address} />
        </li>

        <li> <button onClick={this.handleResetToDefaults.bind(this)} >Reset to Defaults</button> </li>

      </ul>
      </Form>
    )
  }

}

        // <li> Decoder Family:  
        //   <input id='decoderFamily_id'  
        //          type='text'
        //          placeholder={this.props.decoder.family} />
        // </li>
        // <li> Decoder Model:   
        //   <input id='decoderModel_id'   
        //          type='text'
        //          placeholder={this.props.decoder.model} />
        // </li>
        // <li> Decoder Comment: 
        //   <input id='decoderComment_id' 
        //          type='text'
        //          placeholder={this.props.decoder.comment} />
        // </li>
        // <li> Filename:        
        //   <input id='filename_id'       
        //          type='text'
        //          placeholder={this.props.decoder.filename} />
        // </li>
        // <li> <button onClick={this.savePower.bind(this)} >Save</button> </li>


function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions:   bindActionCreators(motivePowerActions, dispatch),
        fetchData: (id) => dispatch(id)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MotivePower)
// export default connect(mapStateToProps)(MotivePower)



// export default MotivePower
