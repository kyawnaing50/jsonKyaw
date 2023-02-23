import React from 'react'
import Title from '../../roundeDesign/home/Title'
import BlogCard from './BlogCard';
import blogFour from '../../assets/work/blogFour.jpeg'

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subtitle=" Posts" />
      <div className=' grid grid-cols-2 gap-10'>
        <div className=' px-6'>
          <BlogCard
            image={blogFour}
            title="April 2, 2020"
            subTitle="အနာဂတ်စီးပွားရေးနှင့် လက်ရှိ Digital Currency"
            category="Travel"
            link=""
          />
        </div>
      </div>
    </div>
  )
}

export default Blog