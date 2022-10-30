// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, author, avatarUrl, imageUrl, topic} = blogDetails
  return (
    <Link className="linkItem" to={`blogs/${id}`}>
      <div className="blogItemContainer">
        <img src={imageUrl} alt={`item${id}`} className="images" />
        <div className="reactContainer">
          <h1 className="topic">{topic}</h1>
          <h1 className="title">{title}</h1>
          <div className="avatar-author">
            <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
