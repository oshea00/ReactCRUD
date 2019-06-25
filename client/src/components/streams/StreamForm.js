import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.onSubmit(values);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" label="Enter Title" component={this.renderInput}/>
                <Field name="description" label="Enter Description" component={this.renderInput}/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = "You must enter a title"
    } 
    if (!values.description) {
        errors.description = "You must enter a description"
    } 
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);


