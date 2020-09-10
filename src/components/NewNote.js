import React from 'react';
import { Button, Form, Container} from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'

function NewNote(props) {
    const { handleSubmit, register, setValue, errors } = useForm()
    const onSubmit = data => console.log(data)

        return (
            <div>
                <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
          {/* <Form.Group widths='equal'>
            <RHFInput
              as={<Checkbox />}
              type='checkbox'
              name='urgent'
              defaultValue="false"
              register={register}
              setValue={setValue}
            />
            </Form.Group> */}
          <Form.Field control={Button}>Login</Form.Field>
                </Form>
                </Container>
            </div>
        );
}
 
export default NewNote;