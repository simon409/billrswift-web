const SmallButton = ({Icon, onclick}) => {
  return (
    <button className="p-2 bg-gray-100 rounded-md" onClick={onclick}><Icon/></button>
  )
}

export default SmallButton