import styled from "styled-components";

export const CardBody = styled.div`
  overflow: hidden;
  height: 120px;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  margin: 10px;
`

export const CardInfos = styled.div`
  padding: 16px;
`

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

export const CardDescription = styled.div`
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
`

export const CardImg = styled.img`
  height: 100%;
  width: 120px;
  object-fit: cover;
`

export const CardButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`

export const DeleteButton = styled.button`
  background-color: #c0392b;
  color: white;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
`

export const DisplayButton = styled.button`
  background-color: #70a1ff;
  color: white;
  width: 100px;
  height: 40px;
  border-radius: 10px;
`
