import React from 'react'
import Natcha from '../assets/natcha.jpeg'
import Skills from './Skills'

import skillsData from '../assets/skills.js'



function PersonalCard() {
    const size = {
        height: '300px',
        width: 'auto',
        borderRadius: '10px'
    }

    const cardBorder = {
        borderRadius: '10px',
        border: '1px solid black',
        padding: '10px'
    }

    const skills = {
        display: 'flex',
        flexDirection: 'row'
    }

    const oppsett = {
        display: 'flex',
        flexDirection: 'row'
    }

    const text = {
        margin: '10px',
        textAlign: 'left'
    }


    const frameworkSkills = skillsData[0].frameWorks;
    const languagesSkills = skillsData[1].languages;
    const otherSkills = skillsData[2].other;
    console.log(frameworkSkills)
    return (
        <div style={cardBorder} >
            <div style={oppsett}>
                <div>
                    <img src={Natcha} style={size} />
                </div>
                <div style={text}>
                    <h3> Natcha Uthaug</h3>
                    <p>My name is Natcha and I am 3rd year computerscience student </p>
                    <p>I have a great interest in IOT system and a strong </p>
                    <p>background in healthcare</p>
                    <p>In my freetime I like to explore the nature, in a sailing boat</p>
                    <p> or just on my feets</p>

                </div>
            </div>
            <h3 style={{ textAlign: 'left' }}> My coding skills</h3>

            {/*   -----   FRAMEWORKS --------*/}
            <h5 style={{ textAlign: 'left' }}>Frameworks</h5>
            <div style={skills}>

                {frameworkSkills.map((skill) => (

                    <Skills
                        skill={skill.skill}
                        level={skill.level}
                        color={skill.color}
                    />

                ))}


            </div>


            {/*   -----   LANGUAGES --------*/}
            <h5 style={{ textAlign: 'left' }}>Languages</h5>
            <div style={skills}>
                {languagesSkills.map((skill) => (
                    <Skills
                        skill={skill.skill}
                        level={skill.level}
                        color={skill.color}
                    />
                ))}

            </div>

            <h5 style={{ textAlign: 'left' }}> Other </h5>
            <div style={skills}>
                {otherSkills.map((skill) => (
                    <Skills
                        skill={skill.skill}
                        level={skill.level}
                        color={skill.color}
                    />
                ))}

            </div>


        </div>
    )
}

export default PersonalCard