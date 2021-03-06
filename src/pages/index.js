import * as React from "react"
import ProjectCards from "../components/ProjectCards";
import "../styles/grid.scss";
import '../styles.scss';
import { Avatar} from "../images";
import { useEffect } from "react";
import ThemeSelector from "../components/ThemeSelector";

// markup
const IndexPage = () => {

  return (
    <main className={'Home'}>
      <ThemeSelector/>
      <div className="container HomeContainer">

        <div className="row" style={{width:'100%'}}> 
          <div className="col-md-3 offset-1">
                <title>JayKay.Tech</title>
                <div className={'Bio'}>
                  <div className="BioHeader">
                    <img src={Avatar} alt="JK Avatar"/>
                    <div className="Name">
                      <h1> Jatin Kukreja</h1>  
                      <p className="text secondary handle">@jaykay.tech</p>
                    </div>
                  </div>

                  <h1 className="mb15">
                    Bio
                  </h1>
                  <p className={'text secondary mb30 biotext'}>
                    I code beautiful designs into functional masterpieces.
                  </p>
                  <ul className="SocialLinks">
                    <li>
                      <a target="_blank" href="https://www.instagram.com/jaykay.tech/">
                        <svg className="instagram" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="-1 -1 23 23">
                          <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-2.5 -2.5)">
                            <path id="Path_50" data-name="Path 50" d="M8,3H18a5,5,0,0,1,5,5V18a5,5,0,0,1-5,5H8a5,5,0,0,1-5-5V8A5,5,0,0,1,8,3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            <path id="Path_51" data-name="Path 51" d="M20.022,15.348a4,4,0,1,1-3.37-3.37,4,4,0,0,1,3.37,3.37Z" transform="translate(-3.022 -2.978)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            <path id="Path_52" data-name="Path 52" d="M26.25,9.75h0" transform="translate(-7.75 -2.25)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                          </g>
                        </svg>

                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://in.linkedin.com/in/jatin-kukreja-13632a7b">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="-1 -1 23 23">
                          <g id="Icon_feather-linkedin" data-name="Icon feather-linkedin" transform="translate(-2.5 -2.5)">
                            <path id="Path_53" data-name="Path 53" d="M21,12a6,6,0,0,1,6,6v7H23V18a2,2,0,0,0-4,0v7H15V18a6,6,0,0,1,6-6Z" transform="translate(-4 -3)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            <path id="Path_54" data-name="Path 54" d="M3,13.5H7v12H3Z" transform="translate(0 -3.5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            <path id="Path_55" data-name="Path 55" d="M7,5A2,2,0,1,1,5,3,2,2,0,0,1,7,5Z" transform="translate(0 0)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="http://github.com/jatinkukreja18">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="-1 -1 24 22">
                          <path id="Icon_feather-github" data-name="Icon feather-github" d="M9.658,18.606C4.9,20.033,4.9,16.228,3,15.753M16.316,21.46V17.779a3.205,3.205,0,0,0-.894-2.483c2.987-.333,6.126-1.465,6.126-6.658a5.174,5.174,0,0,0-1.426-3.566,4.822,4.822,0,0,0-.086-3.587s-1.122-.333-3.719,1.408a12.727,12.727,0,0,0-6.658,0c-2.6-1.741-3.719-1.408-3.719-1.408a4.822,4.822,0,0,0-.086,3.586,5.174,5.174,0,0,0-1.427,3.6c0,5.155,3.139,6.287,6.126,6.658a3.205,3.205,0,0,0-.894,2.454V21.46" transform="translate(-2.394 -0.936)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>

                      </a>
                    </li>
                  </ul>
                  <p  className={'text secondary mb10 chat-text'}>
                    Fancy a quick chat?
                  </p>
                  <a className="text link has-icon mb60 chat-link" href="https://calendly.com/jatinkukreja-connect/30min" target="_blank">
                    Book a meeting
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.207" height="14.207" viewBox="0 0 14.207 14.207">
                      <g id="Icon_feather-external-link" data-name="Icon feather-external-link" transform="translate(-4 -3.793)">
                        <path stroke="currentColor" id="Path_65" data-name="Path 65" d="M15.333,14.056v4.333a1.444,1.444,0,0,1-1.444,1.444H5.944A1.444,1.444,0,0,1,4.5,18.389V10.444A1.444,1.444,0,0,1,5.944,9h4.333" transform="translate(0 -2.333)" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                        <path stroke="currentColor" id="Path_66" data-name="Path 66" d="M22.5,4.5h4.333V8.833" transform="translate(-9.333)" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                        <path stroke="currentColor" id="Path_67" data-name="Path 67" d="M15,12.444,22.944,4.5" transform="translate(-5.444)" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                      </g>
                    </svg>

                  </a>
                </div>
          </div>
          <div className="col-md-7 offset-1">
              <h1 className="mb15">
                  Projects
              </h1>
            <ProjectCards/>
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default IndexPage
