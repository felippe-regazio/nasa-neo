import NeoDataUL from './NeoDataUL'

type NeoDatasetProps = {
  neoList: any
}

export default function NeoDataset({ neoList }: NeoDatasetProps) {  
  return (
    <>
      {
        Object.entries(neoList).map((item: any) => {
          return <NeoDataUL label={item[0]} list={item[1]} key={item[0]}/>
        })
      }    
    </>
  )
  
}