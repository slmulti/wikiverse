import React from 'react';
import {useState, useEffect} from 'react'
import apiURL from '../api';

export const Page = (props) => {

	const [article, setArticle] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const[isClicked, setIsClicked] = useState(false)

  const[FindAuthor, SetFindAuthor] = useState("")

  const[tags, SetTags] = useState([])
  const[createdAt, SetCreatedAt] = useState("")

  const checkPages = props.pages.find(page => page.id == currentPage)
  // console.log(props.pages)
  // console.log(checkPages)
  const slug = checkPages.slug
  // console.log(checkPages.slug)

	const getSingleArticle = async () => {
		const res = await fetch(`${apiURL}/wiki/${slug}`)
		const articleData = await res.json()
		setArticle(articleData)
    // console.log(articleData)
	}

  useEffect(() =>{
		getSingleArticle()
    getAuthor()
    
    
	}, [])

  const testButtonFunction = (e) => {
    console.log(e.target.value)
    setCurrentPage(e.target.value)
    setIsClicked(!isClicked)
    getTags()
    // getCreatedAt()
  }

  
  const getAuthor = async () => {
    const res = await fetch(`${apiURL}/users/${props.page.authorId}`)
    const authorData = await res.json()
    // console.log(authorData)
    SetFindAuthor(authorData.name)
  }

  const getTags = async () => {
    const res = await fetch(`${apiURL}/wiki/${props.page.slug}`)
    const articleWithTags = await res.json()
    console.log(articleWithTags)
    // console.log(tagsData[0].createdAt)
    // console.log(tagsData[0].tags[0].name)
    SetTags(articleWithTags.tags)
    console.log(articleWithTags.tags)
    // SetCreatedAt(tagsData.createdAt)

  }

  return <>
    <div  className="styleArticle">
      <h3>{props.page.title}</h3>
      {isClicked && <h4>Authors name: {FindAuthor}</h4>}
      {isClicked && <h5>{props.page.content}</h5>}
      {isClicked && <h6>#tags:{" "}{tags.map((tag) => {
        return `#${tag.name} `})}</h6>}
      {isClicked && <h6>Article Created: {props.page.createdAt}</h6>}

      {/* <p>{article.map(article => {return article.content === article.id ? <div><p>article: {article.content}</p></div> : <div>display nothing</div>})}</p> */}
      {/* is this where we can get more content from props.page.content??? */}
      <button value= {props.id} onClick={testButtonFunction}>{isClicked ? "Back to Wiki List" : "Find Out More..."}</button>
    </div>
  </>
} 
	