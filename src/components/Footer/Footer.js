import React from 'react';
import facebook from '../../icons/social/Vectorfacebook.svg';
import youtube from '../../icons/social/Vectoryoutube.svg';
import vk from '../../icons/social/Vectorvk.svg';
import './Footer.css';

function Footer() {
    return(
        <section className='footer'>
            <div className='container'>
                <table className='footer-tab'>
                    <tr className='footer-tr'>
                        <td className='footer-head-td'></td>
                        <td className='footer-head-td'><a href='#'>Главная</a></td>
                        <td className='footer-head-td'><a href='#'>Каталог</a></td>
                        <td className='footer-head-td'><a href='#'>Поставщики</a></td>
                        <td className='footer-head-td'><a href='#'>Коллекции</a></td>
                        <td className='footer-head-td'><a href='#'>Дегустация</a></td>
                        <td className='footer-head-td'><a href='#'>Коллекция 2020</a></td>
                        <td className='footer-head-td'><a href='#'>Контакты</a></td>
                        <td className='footer-head-td'></td>
                    </tr>
                    <tr className='footer-tr'>
                        <td className='footer-second-td' colSpan='3'><a href="#">винный бутик LE CORTE</a></td>
                        <td className='footer-second-td' colSpan='2'><a href="#">8 (812) 123-45-67</a></td>
                        <td className='footer-second-td social-footer'>
                            <a href="#"><img src={youtube} alt='youtube'/></a>
                            <a href="#"><img src={vk} alt='vk'/></a>
                            <a href="#"><img src={facebook} alt='facebook'/></a>
                        </td>
                        <td className='footer-second-td' colSpan='3'><a href="#">© le-corte.ru</a></td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default Footer;