type NeoDataListProps = {
  list: any,
  label: string,
}

export default function NeoDataUL({ label, list }: NeoDataListProps) {
  const clickItem = (item: any) => {
    alert(item.name);
  };

  return (
    <>
      <p className="pm-h3">{label}</p>

      <ul>
        {
          list.map((item: any) => (
            <li key={item.id} onClick={() => clickItem(item)}>
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
            </li>
          ))
        }
      </ul>
    </>
  )
}