import React from 'react';
import './Collections.css';
import firstImg from '../../img/collection/coll1.jpg';
import secondImg from '../../img/collection/coll2.jpg';
import thirdImg from '../../img/collection/coll3.jpg';

function Collections() {
    return (
        <section className='collections'>
            <div className='container'>
            <hr className='coll-divider'/>
                <div className='wrapper'>
                    <div className='descr'>
                        <h3 className='subtitle'>Новинки коллекций</h3>
                        <h2 className='coll-title'>
                        Март 1980<br/>Урожай Марселя
                        </h2>
                        <hr className='descr-divider'/>
                        <br/>
                        <p className='coll-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. </p>
                        <table className='table'>
                            <tr>
                                <td className='coll-td'><div className='year'>1980</div></td>
                                <td className='coll-td'>
                                    <div className='table-descr'>Colli Euganei Bianco Ca' Lustra 1980</div>
                                    <div className='inner'>Красочная бутылка вина из Марселя</div>
                                </td>
                            </tr>
                            <tr>
                                <td className='coll-td'><div className='year'>1980</div></td>
                                <td className='coll-td'>
                                    <div className='table-descr'>Colli Euganei Bianco Ca' Lustra 1980</div>
                                    <div className='inner'>Красочная бутылка вина из Марселя</div>
                                </td>
                            </tr>
                            <tr>
                                <td className='coll-td'><div className='year'>1980</div></td>
                                <td className='coll-td'>
                                    <div className='table-descr'>Colli Euganei Bianco Ca' Lustra 1980</div>
                                    <div className='inner'>Красочная бутылка вина из Марселя</div>
                                </td>
                            </tr>
                        </table>
                        <p className='coll-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. 
                        </p>
                        <button type='button' className='coll-btn'>узнать подробнее</button>
                    </div>
                    <div className='images'>
                        <img class='head-img' src={firstImg} alt='logo1'/>
                        <div className='img-wrapper'>
                            <img className='secondary-img' src={secondImg} alt='logo2'/>
                            <img className='secondary-img' src={thirdImg} alt='logo3'/>
                        </div>
                    </div>
                </div>
                <hr className='coll-divider-bottom'/>
            </div>
        </section>
    )
}

export default Collections;