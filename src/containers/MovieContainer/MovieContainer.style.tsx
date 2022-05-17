import styled from "styled-components";

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 450px;
  margin: 20px auto;
  padding-bottom: 10px;
`

export const MovieImg = styled.img`
  height: 600px;
  width: 450px;
`

export const MovieInfo = styled.div`
  display: flex;
  margin-top: 10px;
`

export const MovieInfoField = styled.div`
  font-weight: bold;
  text-align: left;
  margin: 0 15px;
  width: 100px;
`

export const MovieInfoValue = styled.div`
  padding: 0 10px;
  width: 340px;
`

export const DeleteButton = styled.button`
  background-color: #c0392b;
  color: white;
  width: 100px;
  height: 50px;
  border-radius: 10px;
`
