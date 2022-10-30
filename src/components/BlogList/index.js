// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import BlogItem from '../BlogItem/index'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      avatarUrl: eachBlog.avatar_url,
      imageUrl: eachBlog.image_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="blogDataContainer">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogData.map(eachBlog => (
            <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
