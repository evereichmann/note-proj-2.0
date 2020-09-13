import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import { Button, Form, Container } from 'semantic-ui-react'
import { loginSuccess } from '../action/auth'
import { connect } from 'react-redux'

function Login(props) {
    
    const [error, setError] = useState(null)
    

  const { handleSubmit, register, setValue, errors } = useForm()
  const onSubmit = data => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      
      // fetch('http://localhost:3000/api/v1/auth', reqObj)
      fetch('https://noteprojectbackend.herokuapp.com/api/v1/auth', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
            setError(data.error)
        } else {
          localStorage.setItem('myAppToken', data.token)
          props.loginSuccess(data)
          props.history.push('/home')
        }
      })
  }

  return (
    <div>
      <Container id='container'>
      { error ? <h6>{ error }</h6> : null }
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group></Form.Group>
          <Form.Group widths='equal'>
            <RHFInput
              as={<Form.Input />}
              type='text'
              name='username'
              placeholder='username'
              register={register({ required: true, maxLength: 15, minLength: 5 })}
              setValue={setValue}
              error={errors.username && 'Username Error: 5 - 15 Characters'}
            />
            <RHFInput
              as={<Form.Input />}
              type='text'
              name='password'
              placeholder='password'
              register={register({ required: true, maxLength: 15, minLength: 5 })}
              setValue={setValue}
              error={errors.password && 'Password Error: 5 - 15 Characters'}
            />
          </Form.Group>
          <Form.Field control={Button}>Login</Form.Field>
        </Form>
      </Container>
    </div>
  )
}

const mapDispatchToProps = {
    loginSuccess
  }

export default connect(null, mapDispatchToProps)(Login)