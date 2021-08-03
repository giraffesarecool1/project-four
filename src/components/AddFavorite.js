import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { useState } from 'react'

const AddFavorite = () => {

  const [ added, setAdded ] = useState(false)

  const toggleHandler = () => {
    setAdded(!added)
  }

  let toggleButton;
  
  if (added) {
    toggleButton = <button className="podcastsCatalogueItemAdd" onClick={toggleHandler}><AiFillHeart className="podcastsCatalogueItemAddIcon" /></button>
  } else {
    toggleButton = <button className="podcastsCatalogueItemAdd" onClick={toggleHandler}><AiOutlineHeart className="podcastsCatalogueItemAddIcon" /></button>
  }

  return (
    <div>{toggleButton}</div>
  )
}

export default AddFavorite;