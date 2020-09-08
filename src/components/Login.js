import React from 'react';
import { useForm } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
import { Button, Form, Container } from 'semantic-ui-react'

export default function Login() {
    const { handleSubmit, register, setValue, errors } = useForm();
    const onSubmit = data => console.log(data);
  
  
    return (
        <div>
          <Container id="container">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group widths='equal'>
                  <RHFInput
                  as={<Form.Input />}
                  type="text"
                  name="username"
                  placeholder='username'
                  register={register({ required: true, maxLength: 15, minLength: 5 })}
                  setValue={setValue}
                  error={errors.username && "Username Error: 5 - 15 Characters"}
              />
                  <RHFInput
                  as={<Form.Input />}
                  type="text"
                  name="password_digest"
                  placeholder='password'
                  register={register({ required: true, maxLength: 15, minLength: 5 })}
                  setValue={setValue}
                  error={errors.password && "Password Error: 5 - 15 Characters"}
              />
              </Form.Group>
              <Form.Field control={Button}>Login</Form.Field>
            </Form>
            </Container>
      </div>
    );
  }