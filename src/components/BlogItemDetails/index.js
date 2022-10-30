// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {data: {}, isLoading: true}

  componentDidMount() {
    this.blogItemDetails()
  }

  blogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogData = await response.json()
    const updatedData = {
      id: blogData.id,
      title: blogData.title,
      topic: blogData.topic,
      imageUrl: blogData.image_url,
      avatarUrl: blogData.avatar_url,
      content: blogData.content,
      author: blogData.author,
    }
    this.setState({data: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, data} = this.state
    const {id, title, imageUrl, avatarUrl, content, author} = data

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="blogItemDetailContainer">
            <h1 className="titleName">{title}</h1>
            <div className="blogDetails">
              <div className="avatarAuthor">
                <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
                <p className="authorName">{author}</p>
              </div>
              <img src={imageUrl} alt={title} className="image" />
              <p className="content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
