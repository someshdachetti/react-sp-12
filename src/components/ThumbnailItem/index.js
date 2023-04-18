// Write your code here.
import './index.css'

const ThumbNailsImages = props => {
  const {all, isActive, thumbnailImages} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = all

  const thumbnailImage = () => {
    thumbnailImages(id)
  }

  return (
    <li key={id}>
      <img
        src={thumbnailUrl}
        alt={all.thumbnailAltText}
        className={`thumbnailImagesColor ${
          isActive ? 'thumbnailImagesColor' : ''
        }`}
        onClick={thumbnailImage}
      />
    </li>
  )
}
export default ThumbNailsImages
