import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import PortfolioItem from "../components/PortfolioItem"
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

const Portfolio = () => {
  const initialState = {
    showPortfolioItem: false,
    activePortfolio: "",
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const { allPrismicPortfolio } = useStaticQuery(graphql`
    query PortfolioQuery {
      allPrismicPortfolio {
        nodes {
          data {
            page_heading {
              text
            }
            page_content {
              html
            }
            sites {
              company_name {
                text
              }
              role
              project_descripton {
                html
              }
              site_url
              site_thumbnail {
                alt
                url
              }
            }
          }
        }
      }
    }
  `)
  const portfolioList = allPrismicPortfolio.nodes[0].data.sites

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
              {portfolioList.map((item, index) => {
                const companyName = slugify(item.company_name.text)
                const plusOne = index + 1
                const formattedIndex = plusOne.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
                return (
                  <li key={companyName}>
                    <button
                      type="button"
                      className={`${state.activePortfolio === companyName ? "current__item" : ""}`}
                      onClick={() => {
                        dispatch({ type: "portfolioClick", payload: companyName })
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
            {portfolioList.map(item => {
              const companyName = slugify(item.company_name.text)

              return (
                <PortfolioItem
                  key={companyName}
                  item={item}
                  currentItem={state.activePortfolio}
                  itemSlug={companyName}
                  clickHandler={() => {
                    dispatch({ type: "portfolioClick", payload: companyName })
                  }}
                  escaped={() => dispatch({ type: "closePortfolio" })}
                />
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
