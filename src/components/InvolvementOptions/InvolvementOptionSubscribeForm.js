import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import Button from '../Button'
import { fontSize, transitionAll } from '../../styles/mixins'
import { brandGrey, buttonFont } from '../../styles/variables'

const EmailInput = styled.input`
  ${fontSize('12px')};
  font-family: ${buttonFont};
  border-radius: 0;
  box-shadow: 0;
  -webkit-appearance: none;
  padding: 0.4em 1em;
  border: none;
  outline: none;
  background-color: ${brandGrey};
  width: 74%;
  margin-right: 10px;

  &:focus {
    ${transitionAll};
    background-color: ${darken(0.1, brandGrey)};
  }
`

const SubmitButton = styled(Button)`
  ${fontSize('12px')};
  border: 0;
  padding: 0.5em 1em;
  width: 21%;
  text-align: center;
`

const InvolvementOptionSubscribeForm = () => (
  <form>
    <EmailInput
      type='email'
      name='email'
      placeholder='your email address'
    />
    <SubmitButton type='submit'>
      Go
    </SubmitButton>
  </form>
)

export default InvolvementOptionSubscribeForm
