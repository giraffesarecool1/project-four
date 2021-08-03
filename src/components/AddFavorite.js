import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { useState } from 'react'

const AddFavorite = () => {

  const [ added, setAdded ] = useState(false)

  const toggleHandler = () => {
    setAdded(!added)
  }

  let toggleButton;
  
  if (added) {
    toggleButton = <button className="add" onClick={toggleHandler}><AiFillHeart className="heartIcon" /></button>
  } else {
    toggleButton = <button className="add" onClick={toggleHandler}><AiOutlineHeart className="heartIcon" /></button>
  }

  return (
    <div>{toggleButton}</div>
  )
}

export default AddFavorite;