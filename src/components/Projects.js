import React from 'react';
import '../styles/Projects.scss';
import Background from './Background';
import DevList from './DevList';

import useWindowDimensions from '../hooks/useWindowDimensions'
import RecipeImage from '../img/RecipesMockup.png';
import VideoCallImage from '../img/VideoCallMockup.png';
import RecipeImageSmallScreens from '../img/RecipesMockupSmall.png';
import VideoCallImageSmallScreens from '../img/VideoCallMockupSmall.png';

export default function Projects({ forwardRef }) {
    const videCallDevList = [['devicon-typescript-plain', 'TypeScript'], ['devicon-react-original', 'React'], ['devicon-redux-original', 'Redux'], ['devicon-firebase-plain', 'Firebase'], ['devicon-sass-original', 'Sass'], ['devicon-html5-plain', 'HTML']]
    const recipesDevList = [['devicon-javascript-plain', 'JavaScript'], ['devicon-react-original', 'React'], ['devicon-redux-original', 'Redux'], ['devicon-firebase-plain', 'Firebase'], ['devicon-tailwindcss-plain', 'Tailwind CSS'], ['devicon-html5-plain', 'HTML']]   
    const { width } = useWindowDimensions();

    const fadeRight = width < 480 ? 'fade-up':'fade-right';
    const fadeLeft = width < 480 ? 'fade-up':'fade-left';

    return (
        <section className='projects-section' >
            <span ref={forwardRef} className='projects-scroll-ref' />
            <h2 className='projects-text text-medium text-center' data-aos='fade-up' >Projects</h2>
            <div className='projects-wrapper' >

                <div className='projects-item left' >
                    <img src={VideoCallImage} alt='image mockup of videocall website' className='projects-img left' data-aos={fadeRight} />
                    <img src={RecipeImageSmallScreens} alt='image mockup of videocall website' className='projects-img small' data-aos={fadeRight} />

                    <h3 className='project-name text-small center' data-aos={fadeRight} >VideoCall</h3>

                    <div className='button-wrapper' data-aos={fadeRight} >
                        <a className='button' href='https://github.com/FilipKujavec/videocall' target='_blank' rel='noreferrer' >
                            <i className='button-icon devicon-github-original' ></i>
                        </a>

                        <a className='button' href='https://videocall.kujavec.com' target='_blank' rel='noreferrer' >
                            <i className='button-icon material-icons-outlined' >play_arrow</i>
                        </a>
                    </div>

                    <DevList list={videCallDevList} fadeInSide={fadeRight} />

                </div>

                <div className='projects-item' >
                    <img src={RecipeImage} alt='image mockup of recipes website' className='projects-img right' data-aos={fadeLeft} />
                    <img src={RecipeImageSmallScreens} alt='image mockup of recipes website' className='projects-img small' data-aos={fadeLeft} />



                    <h3 className='project-name text-small center' data-aos={fadeLeft} >Recipes</h3>

                    <div className='button-wrapper' data-aos={fadeLeft} >
                        <a className='button' href='https://github.com/FilipKujavec/recipes' target='_blank' rel='noreferrer' >
                            <i className='button-icon devicon-github-original' ></i>
                        </a>

                        <a className='button' href='https://recipes.kujavec.com' target='_blank' rel='noreferrer' >
                            <i className='button-icon material-icons-outlined' >play_arrow</i>
                        </a>
                    </div>

                    <DevList list={recipesDevList} fadeInSide={fadeLeft} />
                </div>
            </div>

            <Background class='second-background' />
        </section>
    );
}
