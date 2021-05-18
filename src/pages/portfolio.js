import React, { useReducer, useEffect } from "react"

import Layout from "../components/layout"

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

  const onDown = event => {
      if (event.keyCode === 27) {
        dispatch({ type: "closePortfolio"})
      }
  }

  useEffect(() => {
    window.addEventListener("keydown", onDown)

    return () => {
        window.removeEventListener("keydown", onDown)
    }
  }, [])

  return (
    <Layout title="Portfolio">
      <section className={`listings-wrapper${state.showPortfolioItem === true ? ' listings-shown' : ''}`}>
        <div className="container">
          <article className="listings-nav">
            <ul>
              <li>
                <button
                  className={`${state.activePortfolio === 'hooters' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "hooters"})
                  }}
                  onKeyDown={() => {
                    dispatch({ type: "closePortfolio"})
                  }}
                >
                  01
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'simavita' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "simavita"})
                  }}
                  onKeyDown={() => {
                    dispatch({ type: "closePortfolio"})
                  }}
                >
                  02
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'drop-deck-depot' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "drop-deck-depot"})
                  }}
                  onKeyDown={() => {
                    dispatch({ type: "closePortfolio"})
                  }}
                >
                  03
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'good2grow' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "good2grow"})
                  }}
                >
                  04
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'utility' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "utility"})
                  }}
                >
                  05
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'marist' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "marist"})
                  }}
                >
                  06
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'mitsubishi-electric-demo-truck' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "mitsubishi-electric-demo-truck"})
                  }}
                >
                  07
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'sqwincher' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "sqwincher"})
                  }}
                >
                  08
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'crisp-video' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "crisp-video"})
                  }}
                >
                  09
                </button>
              </li>
              <li>
                <button
                  className={`${state.activePortfolio === 'cnl-securities' ? 'current__item' : ''}`}
                  onClick={() => {
                    dispatch({ type: "portfolioClick", payload: "cnl-securities"})
                  }}
                >
                  10
                </button>
              </li>
            </ul>
          </article>
          <div className="listings-item__wrapper">
            <article id="hooters" key="hooters" className={`listings-item${state.activePortfolio === 'hooters' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "hooters"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >Hooters</button>
                  <h3 className="listings-item__role">Front-end Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Pulvinar mi fusce massa duis varius neque est volutpat mus ultrices finibus, nam hac sodales etiam tincidunt ligula libero mollis potenti facilisis. Dis ex enim suscipit ultrices lacus nec velit fringilla scelerisque erat, arcu lectus non etiam conubia risus ligula ad est porta tempus.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/hooters-1.jpg" alt="Hooters" />
              </div>
            </article>
            <article id="simavita" key="simavita" className={`listings-item${state.activePortfolio === 'simavita' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "simavita"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    Simavita
                  </button>
                  <h3 className="listings-item__role">Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Commodo risus justo litora convallis tristique mauris a lectus sapien molestie ultricies inceptos eu, eros sed dapibus ac parturient quam nullam in ad imperdiet per ullamcorper. Elementum venenatis sodales mi eu curabitur quam hac vivamus augue ultrices, suscipit auctor elit suspendisse donec cras etiam praesent. Morbi potenti nulla egestas rutrum aliquet class tristique posuere.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/simavita-tech-pg-1.jpg" alt="Simavita" />
              </div>
            </article>
            <article id="drop-deck-depot" key="drop-deck-depot" className={`listings-item${state.activePortfolio === 'drop-deck-depot' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "drop-deck-depot"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    Drop Deck Depot
                  </button>
                  <h3 className="listings-item__role">Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Vehicula curabitur class hac eleifend nostra posuere sollicitudin feugiat elementum nisi arcu diam, rhoncus lacus volutpat velit molestie mi fames sed auctor primis litora. Felis parturient cras tortor tincidunt sapien nam arcu sociosqu, eleifend elit vitae penatibus elementum dis praesent.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/drop-deck-depot-img.png" alt="Drop Deck Depot" />
              </div>
            </article>
            <article id="good2grow" key="good2grow" className={`listings-item${state.activePortfolio === 'good2grow' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "good2grow"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    good2grow
                  </button>
                  <h3 className="listings-item__role">Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Vel molestie tincidunt turpis placerat hac ultrices orci venenatis consectetur donec, varius metus dictumst enim ullamcorper quam habitasse lorem purus fermentum aptent, sodales amet imperdiet felis velit sagittis est rhoncus platea. Cursus mauris fermentum feugiat donec dictumst urna elit nostra tempus magna, ligula ipsum ultricies in habitant potenti aptent pulvinar consectetur.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/good2grow.jpg" alt="good2grow" />
              </div>
            </article>
            <article id="utility" key="utility" className={`listings-item${state.activePortfolio === 'utility' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "utility"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    Utility
                  </button>
                  <h3 className="listings-item__role">Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Justo felis nullam efficitur nulla lobortis lacinia sociosqu malesuada venenatis, urna dapibus eget laoreet maximus duis nisl donec, ipsum mi fermentum consequat adipiscing erat neque sodales.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/utility-site.jpg" alt="Utility" />
              </div>
            </article>
            <article id="marist" key="marist" className={`listings-item${state.activePortfolio === 'marist' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "marist"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    Marist
                  </button>
                  <h3 className="listings-item__role">User Experience, Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Mattis sed vestibulum praesent sem litora porttitor tempor sit habitasse eleifend, adipiscing venenatis mauris ad lacinia ultrices quis cursus maecenas facilisi, egestas at ridiculus commodo integer lorem porta magna feugiat.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/marist.jpg" alt="Marist" />
              </div>
            </article>
            <article id="mitsubishi-electric-demo-truck" key="mitsubishi-electric-demo-truck" className={`listings-item${state.activePortfolio === 'mitsubishi-electric-demo-truck' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "mitsubishi-electric-demo-truck"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    Mitsubishi Electric Demo Truck
                  </button>
                  <h3 className="listings-item__role">Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Proin convallis euismod vehicula nec porttitor in quisque nisi phasellus dui, aliquet natoque massa porta ultrices felis conubia justo parturient vestibulum dictum, mi vitae elit tempus hendrerit ad penatibus eu lorem.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/mitsubishi-demo-truck.jpg" alt="Mitsubishi Electric Demo Truck" />
              </div>
            </article>
            <article id="sqwincher" key="sqwincher" className={`listings-item${state.activePortfolio === 'sqwincher' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "sqwincher"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    Sqwincher
                  </button>
                  <h3 className="listings-item__role">Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Et hac hendrerit iaculis tincidunt a mollis vitae fusce massa viverra, justo maximus netus integer ultricies magna feugiat diam. Justo lobortis at aliquam mus velit quis inceptos ac hac vel netus tincidunt magna ligula congue mollis dictumst euismod habitasse.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/sqwincher.jpg" alt="Sqwincher" />
              </div>
            </article>
            <article id="crisp-video" key="crisp-video" className={`listings-item${state.activePortfolio === 'crisp-video' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "crisp-video"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    Crisp Video
                  </button>
                  <h3 className="listings-item__role">Front-end Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Integer maecenas quis nibh sit vestibulum non dui, tempus aliquam nulla convallis taciti. Leo taciti ullamcorper cursus venenatis condimentum magnis dui lorem nostra, ac nisl tortor sem lacinia adipiscing quis lectus, senectus in mi integer vitae neque tristique sagittis.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/legal-video.jpg" alt="Crisp Video" />
              </div>
            </article>
            <article id="cnl-securities" key="cnl-securities" className={`listings-item${state.activePortfolio === 'cnl-securities' ? ' show-listings-item' : ''}`}>
              <div className="listings-item__content">
                <header className="listings-header">
                  <button
                    className="listings-item__name"
                    onClick={() => {
                      dispatch({ type: "portfolioClick", payload: "cnl-securities"})
                    }}
                    onKeyDown={() => {
                      dispatch({ type: "closePortfolio"})
                    }}
                  >
                    CNL Securities
                  </button>
                  <h3 className="listings-item__role">Lead Developer</h3>
                </header>
                <div className="listings-item__copy">
                  <p>Tempus nunc aliquet quam vehicula sociosqu rhoncus montes ornare, sodales aptent suspendisse nullam eget sem tellus cursus curae, pretium dis eu commodo egestas torquent tincidunt. Praesent posuere tempus elit vitae facilisi vulputate neque curae, sem sapien donec dignissim eget penatibus primis egestas a.</p>
                </div>
              </div>
              <div className="listings-item__thumbnail">
                <img src="/images/cnl-securities.jpg" alt="CNL Securities" />
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
