const DefaultLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <main className="plume">
      {children}
    </main>
  )
}

export default DefaultLayout