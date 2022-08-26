import React from 'react';
import {useState, useEffect} from 'react'
import apiURL from '../api';

export const Page = (props) => {

	const [article, setArticle] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const[isClicked, setIsClicked] = useState(false)

  const checkPages = props.pages.find(page => page.id == currentPage)
  console.log(props.pages)
  console.log(checkPages)
  const slug = checkPages.slug
  // console.log(checkPages.slug)

	const getSingleArticle = async () => {
		const res = await fetch(`${apiURL}/wiki/${slug}`)
		const articleData = await res.json()
		setArticle(articleData)
    console.log(articleData)
	}

	useEffect(() =>{
		getSingleArticle()
	}, [])

  const testButtonFunction = (e) => {
    console.log(e.target.value)
    setCurrentPage(e.target.value)
    setIsClicked(!isClicked)
  }

  return <>
    <h3>{props.page.title}</h3>
    {isClicked && <h3>{props.page.content}</h3>}
    {/* <p>{article.map(article => {return article.content === article.id ? <div><p>article: {article.content}</p></div> : <div>display nothing</div>})}</p> */}
    {/* is this where we can get more content from props.page.content??? */}
    <button value= {props.id} onClick={testButtonFunction}>Find Out More</button>
  </>
} 
	