import React from 'react'

export default function PortfolioItem({item, currentItem, clickHandler, escaped}) {
  const { company, project_description, url, role, thumbnail} = item.data
  console.log(url.url);
  function handled(event) {
    if (event.keyCode === 27) {
      escaped();
    }
  }
  return (
    <article id="hooters" key="hooters" className={`listings-item${currentItem === item.uid ? ' show-listings-item' : ''}`}>
      <div className="listings-item__content">
        <header className="listings-header">
          <button
            className="listings-item__name"
            onClick={clickHandler}
            onKeyDown={handled}
          >{company.text}</button>
          <h3 className="listings-item__role">Front-end Developer</h3>
        </header>
        <div className="listings-item__copy">
          <div dangerouslySetInnerHTML={{__html: project_description.html}}></div>
          {url.url &&
            <a href={url.url} class="btn btn1" target="_blank" rel="noopener noreferrer">Visit Site</a>
          }
        </div>
      </div>
      {thumbnail.url &&
        <div className="listings-item__thumbnail">
          <img src={thumbnail.url} alt="Hooters" />
        </div>
      }
    </article>
  )
}
