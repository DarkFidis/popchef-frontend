import styled from "styled-components";

export const FormContainer = styled.div`
  width: 400px;
  height: 700px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`

export const MovieForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const FormGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const MovieFormTitle = styled.h1`
  font-size: 20px;
`

export const SeparationLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #747cdf;
`

export const MovieFormInput = styled.input`
  margin-top: 5px;
  padding: 10px 5px 10px 30px;
  border: 1px solid #c9c9c9;
  outline-color: #747cdf;
  border-radius: 5px;
`

export const MovieFormTextarea = styled.textarea`
  margin-top: 5px;
  padding: 10px;
  background-color: #f1f1f1;
  border: 2px solid #747cdf;
  outline: none;
  border-radius: 5px;
  resize: none;
  height: 72%;
`

export const SubmitButton = styled.button`
  margin-top: 10px;
  background-color: #747cdf;
  color: white;
  font-size: 15px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  width: 100px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`

export const ErrorText = styled.p`
  color: #e74c3c
`
