import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import { Button, Form, Container } from 'semantic-ui-react'
import { loginSuccess } from '../action/auth'
import { connect } from 'react-redux'

function Login (props) {

  const [error, setError] = useState(null)

  const { handleSubmit, register, setValue, errors } = useForm()
  const onSubmit = data => {
  console.log(data)
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'user': data })
  }

  fetch('https://noteprojectbackend.herokuapp.com/users', reqObj)
  .then(resp => resp.json())
  .then(data => {
    if (data.error) {
        setError(data.error)
    } else {
    //   // localStorage.setItem('myAppToken', data.token)
      props.loginSuccess(data)
      props.history.push('/home')
    }
    // console.log(data)
  })
}


  return (
    <div>
      <Container id='container'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group></Form.Group>
          <Form.Group widths='equal'>
            <RHFInput
              as={<Form.Input />}
              type='text'
              register={register({ required: true })}
              setValue={setValue}
              name='first_name'
              placeholder='first name'
              error={errors.first_name && 'First Name Error'}
            />
            <RHFInput
              as={<Form.Input />}
              type='text'
              name='last_name'
              placeholder='last name'
              register={register({ required: true })}
              setValue={setValue}
              error={errors.last_name && 'Last Name Error'}
            />
          </Form.Group>
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
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Container>
    </div>
  )
}


const mapDispatchToProps = {
  loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)