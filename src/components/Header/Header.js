import React from 'react';
import './Header.css';

function Header() {
    return(
        <header className='header'>
            <div className='container'>
                    <div className='header-contacts'>
                            <span>Новокузнечный переулок 4/1</span>
                            <span>8 (812) 123-45-67</span>
                    </div>
                    <nav>
                        <table className='menu'>
                            <tr className='menu-tr'>
                                <td className='menu-td'><a href='#'>Каталог</a></td>
                                <td className='menu-td'><a href='#'>Доставка</a></td>
                                <td className='menu-td'><a href='#'>Коллекции</a></td>
                                <td className='menu-td'><a href='#'>Контакты</a></td>
                            </tr>
                        </table>
                    </nav>
                    <div className='btn-group'>
                        <button type='button' className='btn'>винная карта</button>
                        <button type='button' className='btn'>дегустация</button>
                    </div>
            </div>
        </header>
    )
}

export default Header;