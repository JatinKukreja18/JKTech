import React, { useState } from 'react';
import { useEffect } from 'react';
import "./ThemeSelector.scss";

function ThemeSelector(props) {
    const [theme,setTheme]=useState('dark');

    useEffect(()=>{

        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20
        if(isDayTime){
            changeTheme('light')         
        }else{
            changeTheme('dark')         
        }
    },[])

    function changeTheme(val){
        setTheme(val)
        document.querySelector('html').classList = val;     
    }
    return (
        <div className="container">
                <div className={'ThemeSelect'}>
                {theme==='light'?
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" onClick={()=>changeTheme('dark')}>
                    <g id="Icon_feather-sun" data-name="Icon feather-sun" transform="translate(-0.5 -0.5)">
                    <path id="Path_56" data-name="Path 56" d="M19.591,15.045A4.545,4.545,0,1,1,15.045,10.5a4.545,4.545,0,0,1,4.545,4.545Z" transform="translate(-3.545 -3.545)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_57" data-name="Path 57" d="M18,1.5V3.318" transform="translate(-6.5 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_58" data-name="Path 58" d="M18,31.5v1.818" transform="translate(-6.5 -11.818)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_59" data-name="Path 59" d="M6.33,6.33,7.621,7.621" transform="translate(-1.903 -1.903)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_60" data-name="Path 60" d="M27.54,27.54l1.291,1.291" transform="translate(-10.258 -10.258)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_61" data-name="Path 61" d="M1.5,18H3.318" transform="translate(0 -6.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_62" data-name="Path 62" d="M31.5,18h1.818" transform="translate(-11.818 -6.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_63" data-name="Path 63" d="M6.33,28.831,7.621,27.54" transform="translate(-1.903 -10.258)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Path_64" data-name="Path 64" d="M27.54,7.621,28.831,6.33" transform="translate(-10.258 -1.903)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </g>
                </svg>
            
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19.001" viewBox="0 0 19 19.001" onClick={()=>changeTheme('light')}>
                    <path id="Icon_feather-moon" data-name="Icon feather-moon" d="M21.557,13.766A8.518,8.518,0,1,1,12.291,4.5a6.625,6.625,0,0,0,9.266,9.266Z" transform="translate(-3.557 -3.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>

                }
            </div>

        </div>
    );
}

export default ThemeSelector;