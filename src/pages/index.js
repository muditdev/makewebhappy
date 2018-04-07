import React from 'react'
import Link from 'gatsby-link'
const IndexPage = () => (
  <div>
    <section className="welcome bg-heading mt100" data-bg-heading="welcome">
      <p>We are a multidisciplinary design studio with a focus on visual brand
        management and web design .</p>
      <p>these are some of my
        <a href="javascript:void(0)">projects</a>
        i did
        <a href="javascript:void(0)">click here</a>
        to view more projects.
      </p>
    </section>

    <section className="newsletter requestPortfolio ng-scope">
      <p className="nl-des">
        get access to my personal portfolio.
        <br/>
        <span>enter your email and my portfolio will be sent to your inbox !
        </span>
      </p>
      <form
        className="nl-form validate ng-pristine ng-valid"
        action="https://formspree.io/mudit@makewebhappy.com"
        method="POST">
        <div className="nl-input">
          <input
            type="text"
            id="mce-EMAIL"
            name="EMAIL"
            className="email"
            placeholder="your@email.com"/></div>
        <button type="submit" className="btn btn--icon-2 btn-reqPort">
          <span className="btn-text">request portfolio</span>
        </button>
      </form>
    </section>
  </div>
)

export default IndexPage
