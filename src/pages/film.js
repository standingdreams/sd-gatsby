import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { slugify } from "../components/helpers"

function reducer(state, action) {
  switch (action.type) {
    case "portfolioClick":
      return {
        ...state,
        showPortfolioItem: action.payload !== state.activePortfolio,
        activePortfolio: action.payload === state.activePortfolio ? "" : action.payload,
      }

    case "closePortfolio":
      return {
        ...state,
        showPortfolioItem: false,
        activePortfolio: "",
      }

    default:
      throw new Error()
  }
}

const Film = () => {
  const initialState = {
    showPortfolioItem: false,
    activePortfolio: "",
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const { allPrismicFilm } = useStaticQuery(graphql`
    query FilmQuery {
      allPrismicFilm {
        nodes {
          data {
            page_heading {
              text
            }
            films {
              film_name {
                text
              }
              role
              project_descripton {
                text
              }
              video_id
            }
          }
        }
      }
    }
  `)
  const filmList = allPrismicFilm.nodes[0].data.films

  function handleOnKeyDown(event) {
    if (event.keyCode === 27) {
      dispatch({ type: "closePortfolio" })
    }
  }

  return (
    <Layout title="Portfolio">
      <section className={`listings-wrapper${state.showPortfolioItem === true ? " listings-shown" : ""}`}>
        <div className="container">
          <article className="listings-nav">
            <ul>
              {filmList.map((item, index) => {
                const filmName = slugify(item.film_name.text)
                const plusOne = index + 1
                const formattedIndex = plusOne.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
                return (
                  <li key={filmName}>
                    <button
                      type="button"
                      className={`${state.activePortfolio === filmName ? "current__item" : ""}`}
                      onClick={() => {
                        dispatch({ type: "portfolioClick", payload: filmName })
                      }}
                      onKeyDown={handleOnKeyDown}
                    >
                      {formattedIndex}
                    </button>
                  </li>
                )
              })}
            </ul>
          </article>
          <div className="listings-item__wrapper">
            {filmList.map(item => {
              const { film_name, project_descripton, video_id, role } = item
              const filmName = slugify(film_name.text)

              function handled(event) {
                if (event.keyCode === 27) {
                  dispatch({ type: "closePortfolio" })
                }
              }

              return (
                <article
                  id={filmName}
                  key={filmName}
                  className={`listings-item${state.activePortfolio === filmName ? " show-listings-item" : ""}`}
                >
                  <div className="listings-item__content">
                    <header className="listings-header">
                      <button type="button" className="listings-item__name" onClick={() => dispatch({ type: "portfolioClick", payload: filmName })} onKeyDown={handled}>
                        {film_name.text}
                      </button>
                      <h3 className="listings-item__role">{role}</h3>
                    </header>
                    <div className="listings-item__copy">
                      <div dangerouslySetInnerHTML={{ __html: project_descripton.text }} />
                    </div>
                  </div>
                  <div className="listings-item__thumbnail">
                  <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Film
