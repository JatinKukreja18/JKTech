import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import projects from "./links";
import "./ProjectCards.scss";
import Carousel from 'react-multi-carousel';


const DIRECTIONS = {
    LEFT: 'left',
    RIGHT: 'right'
  };

function ProjectCards(props) {
    const [currentCard,setCurrentCard] = useState(0);
    const [direction,setDirection] = useState(DIRECTIONS.RIGHT);
    const onAnimationEnd = (event) => {
        event.target.classList.add("hidden");
    }
    const linkClickHandler = (v) => {
        console.log(v);
    }
    const onPrevClickHandler = (v) => {
        console.log(v);
        setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
        setDirection(DIRECTIONS.LEFT);
    }
    const onNextClickHandler = (v) => {
        const newCardNumber = currentCard === projects.length - 1 ? currentCard : currentCard + 1;
        setCurrentCard(newCardNumber);
        setDirection(DIRECTIONS.RIGHT);
    }
    var touchedStartedAt = 0;
    const handleTouchStart = (e)=>{
      console.log(e.changedTouches[0].clientX);
      touchedStartedAt = e.changedTouches[0].clientX;
    }
    const handleTouchEnd = (e)=>{
        console.log(e.changedTouches[0].clientX);
        if(Math.abs(touchedStartedAt - e.changedTouches[0].clientX) > 99){
          if(touchedStartedAt > e.changedTouches[0].clientX){
            onNextClickHandler();
            setDirection(DIRECTIONS.RIGHT)
          }else{
            onPrevClickHandler();
            setDirection(DIRECTIONS.LEFT)
          }
        }
    }
    const desktopView = (
      <>
       <div className={'ProjectCards carousel-item-container'} 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            >
            {projects.map((project,index) => {
                let classes = '';
                if (index === currentCard) {
                  classes = 'active';
                } else if (index < currentCard) { // prev card
                  classes = 'old';
                } else { // next card
                  classes = 'new';
                }
                let props = {};
                classes = `${classes} ${direction}`;
                if (index < currentCard) {
                    props = direction === DIRECTIONS.RIGHT ? {
                       onAnimationEnd: onAnimationEnd
                    } : {
                        onAnimationStart: onAnimationEnd
                      }
                  }
                return (
                <div  key={'project' + index} id={`project-item-${index}`} className={`carousel-item ${classes}`} {...props} >
                    <ProjectCard project={project} linkClickHandler={linkClickHandler} index />
                </div>

                )
            })
          }
        </div>
        <div className='arrow-buttons-container'>
            <div className={`prev-btn-container ${currentCard === 0?'disabled':''}`}  onClick={onPrevClickHandler} >
                <svg xmlns="http://www.w3.org/2000/svg" width="12.621" height="22.243" viewBox="0 0 12.621 22.243">
                        <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M22.5,27l-9-9,9-9" transform="translate(-12 -6.879)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    </svg>
            </div>
            <div 
                className={`next-btn-container ${currentCard === projects.length - 1? 'disabled':''}`}
                onClick={onNextClickHandler} 
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="12.621" height="22.243" viewBox="0 0 12.621 22.243">
                  <path id="Icon_feather-chevron-right" data-name="Icon feather-chevron-right" d="M13.5,27l9-9-9-9" transform="translate(-11.379 -6.879)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </svg>
            </div>
        </div>
        </>
    )
    const mobileView = (
      <>
        <Carousel>
          
        </Carousel>
      </>
    )
    return (
       <>
        {/* {
          window.innerWidth > 767?
            desktopView
            :
            mobileView
        } */
        desktopView
        }
       </>
        
    );
}

export default ProjectCards;