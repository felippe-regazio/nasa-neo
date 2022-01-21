import styled from 'styled-components'
import NeoCard from './NeoCard'

type NeoDataListProps = {
  list: any,
  label: string,
}

const NeoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  
  li {
    width: 100%;
    padding: 16px;
    max-width: 300px;
    list-style: none;
  }
`

export default function NeoDataUL({ label, list }: NeoDataListProps) {
  const clickItem = (item: any) => {
    alert(`Item Name: ${item.name}`);
  };

  return (
    <>
      <p className="pm-h4">{label}</p>

      <NeoList>
        {
          list.map((item: any) => (
            <li key={item.id}>
              <div onClick={() => clickItem(item)}>
                <NeoCard>
                  <p className="pm-h4">
                    ☄
                  </p>
                  
                  <p>
                    <strong>ID:</strong> {item.id}
                  </p>

                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>

                  <p>
                    <strong>Absolute magnitude h:</strong> {item.absolute_magnitude_h}
                  </p>

                  <p>
                    <strong>Is potentially hazardous asteroid:</strong> {item.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                  </p>

                  <p>
                    <strong>Is sentry object:</strong> {item.is_sentry_object ? 'Yes' : 'No'}
                  </p>

                  <p>
                    <strong>Neo reference ID:</strong> {item.neo_reference_id}
                  </p>
                </NeoCard>
              </div>
            </li>
          ))
        }
      </NeoList>
    </>
  )
}