// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
