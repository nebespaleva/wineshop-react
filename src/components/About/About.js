import React from 'react';

import logo from '../../icons/glass.png'
import './About.css';

function About() {
    return(
        <section className='about'>
            <div className='container'>
                    <div className='border'>
                        <h2 className='title'>Лучший вкус, это вкус долголетнего вина</h2>
                        <hr className='divider'/>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.</p>
                        <img className='glass-img'
                            src={logo}
                            alt='glass'/>
                    </div>
            </div>
        </section>
    )
}

export default About;