import React from 'react';
import { Button, Form, Container} from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import { connect } from 'react-redux'
import { postNewNote } from '../action/index'

function NewNote(props) {

    const { handleSubmit, register, setValue, errors } = useForm()
    const onSubmit = data => {
        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                user_id: props.auth.id,
                urgent: false
            })
          }
      
          fetch('http://localhost:3000/to_dos', reqObj)
          // fetch('https://noteprojectbackend.herokuapp.com/to_dos', reqObj)
          .then(resp => resp.json())
          .then(data => {
              props.postNewNote(data)
              props.history.push('/home')
          })
    }
        return (
            <div>
                <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group></Form.Group>
                <Form.Group widths='equal'>
                    <RHFInput
                    as={<Form.Input />}
                    type='text'
                    name='title'
                    placeholder='title'
                    register={register({ required: true })}
                    setValue={setValue}
                    error={errors.title && 'You must have a title'}
                    />
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <RHFInput
                    as={<Form.Input />}
                    type='area'
                    name='content'
                    register={register({ required: true })}
                    setValue={setValue}
                    error={errors.content && 'You must have content'}
                    />
                </Form.Group>
                <Form.Field control={Button}>Create Note</Form.Field>
                </Form>
                </Container>
            </div>
        );
}
 
const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }
  
  const mapDispatchToProps = {
    postNewNote
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(NewNote)