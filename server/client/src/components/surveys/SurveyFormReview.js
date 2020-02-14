import React from 'react';
import {connect} from 'react-redux';
import FIELDS from'./formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';
const SurveyFormReview = ({onCancel,formValues,submitSurvey,history})=>{

	const reviewFields = _.map(FIELDS,({name,label})=>{
		return(
			<div key = {name}>
				<label> {label}</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	});
	return(

		<div>
			<h5> Please confrim your entries </h5>
			{reviewFields}
			<button
				className = "yellow darken-3 white-text btn-flat"
				onClick = {onCancel}
			>
				Back
			</button>

			<button 
				onClick={()=>submitSurvey(formValues,history)}
				className ="green white-text btn-flat right"
			>

				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state){
	return {
		formValues:state.form.surveyForm.values
	};
}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));