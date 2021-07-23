import React from "react"
import PropTypes from "prop-types"

export default function PortfolioItem({ item, currentItem, clickHandler, escaped, itemSlug }) {
  const { company_name, project_descripton, site_url, role, site_thumbnail } = item
  function handled(event) {
    if (event.keyCode === 27) {
      escaped()
    }
  }
  return (
    <article
      id={itemSlug}
      key={itemSlug}
      className={`listings-item${currentItem === itemSlug ? " show-listings-item" : ""}`}
    >
      <div className="listings-item__content">
        <header className="listings-header">
          <button type="button" className="listings-item__name" onClick={clickHandler} onKeyDown={handled}>
            {company_name.text}
          </button>
          <h3 className="listings-item__role">{role}</h3>
        </header>
        <div className="listings-item__copy">
          <div dangerouslySetInnerHTML={{ __html: project_descripton.html }} />
          {site_url && (
            <a href={site_url} className="btn btn1" target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          )}
        </div>
      </div>
      {site_thumbnail.url && (
        <div className="listings-item__thumbnail">
          <img src={site_thumbnail.url} alt="Hooters" />
        </div>
      )}
    </article>
  )
}

PortfolioItem.propTypes = {
  item: PropTypes.object,
  currentItem: PropTypes.string,
  clickHandler: PropTypes.func,
  escaped: PropTypes.func,
  itemSlug: PropTypes.string,
}
