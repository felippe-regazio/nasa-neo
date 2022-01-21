import styled from 'styled-components'

const Card = styled.article`
  padding: 16px;
  background-color: #f1f1f1;
  border: solid 1px #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

export default function NeoCard({ children }: any): JSX.Element {
  return (
    <Card>
      { children }
    </Card>
  )
}