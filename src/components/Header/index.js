import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <header className="main-header">
      <div className="top-header">
        <div className="branding">
          <div className="logo">
            <a href="/">
              <img src="/assets/svg/myavtar.svg" alt=""/>
            </a>
          </div>
        </div>
        <nav className="main-nav">
          <ul id="navItems">
            <li>
              <a>home</a>
            </li>
            <li>
              <a>services</a>
            </li>
            <li>
              <a>projects</a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="home-intro">
        <div className="intro-wrap">
          <figure className="myAvtar">
            <img src="/assets/svg/myavtar.svg" alt=""/>
          </figure>
          <div className="intro-content">
            <h1 className="title">making web happy</h1>
            <h2 className="sub-title">user interaction engineer
            </h2>
            <p className="bio">
              Hello there, i am Front-end developer and a weird guy who likes making weird
              things with web technologies.
              <br/>
              I like to resolve design problems, create smart user interface and imagine
              useful interaction, developing rich web experiences &amp; web applications.
            </p>
            <a
              className="btn btn--icon-1"
              href="https://in.linkedin.com/in/muditjain1996"
              target="_blank">
              <span className="Ico-profile icon"></span>
              view profile</a>
          </div>
        </div>
      </section>
    </header>
  </div>
)

export default Header
