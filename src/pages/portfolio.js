import React, { useReducer } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout"
import PortfolioItem from "../components/PortfolioItem";

function reducer(state, action) {
  switch (action.type) {
    case "portfolioClick":
      return {
        ...state,
        showPortfolioItem: action.payload === state.activePortfolio ? false : true,
        activePortfolio: action.payload === state.activePortfolio ? '' : action.payload,
      }

    case "closePortfolio":
      return {
        ...state,
        showPortfolioItem: false,
        activePortfolio: '',
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
  const {allPrismicPortfolioItems} = useStaticQuery(graphql`
    query PortfolioQuery {
      allPrismicPortfolioItems(sort: {fields: uid}) {
        nodes {
          uid
          data {
            company {
              text
            }
            role
            project_description {
              html
            }
            url {
              url
            }
            thumbnail {
              url
              alt
            }
          }
        }
      }
    }
  `)
  const portfolioList = allPrismicPortfolioItems.nodes;
  function handleOnKeyDown(event) {
    if (event.keyCode === 27) {
      dispatch({ type: "closePortfolio"})
    }
  }

  return (
    <Layout title="Portfolio">
      <section className={`listings-wrapper${state.showPortfolioItem === true ? ' listings-shown' : ''}`}>
        <div className="container">
          <article className="listings-nav">
            <ul>
              {portfolioList.map((item, index) => {
                const plusOne = index + 1;
                const formattedIndex = plusOne.toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false
                })
                return (
                  <li key={`${item.uid}-number`}>
                    <button
                      className={`${state.activePortfolio === item.uid ? 'current__item' : ''}`}
                      onClick={() => {
                        dispatch({ type: "portfolioClick", payload: item.uid})
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
            {portfolioList.map((item) => <PortfolioItem key={item.uid} item={item} currentItem={state.activePortfolio} clickHandler={() => {dispatch({ type: "portfolioClick", payload: item.uid})}} escaped={() => dispatch({ type: "closePortfolio"})} />)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
