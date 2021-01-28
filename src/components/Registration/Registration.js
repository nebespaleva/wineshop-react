import React, { Component } from 'react';
import grape from '../../icons/grape.png';
import barell from '../../icons/barrel.png';
import './Registration.css';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.setState = {

        }
    }

    render() {
        return(
            <section className='reg'>
                <div className='container'>
                    <h2 className='reg-title'>Запись на дегустацию</h2>
                    <img className='grape-img' src={grape} alt='grape'/>
                    <img className='barrel-img' src={barell} alt='barell'/>
                    <div className='reg-border'>
                        <hr className='reg-divider'/>
                        <p className='reg-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. 
                        </p>
                        <form>
                            <div className='reg-input'>
                                <input name='name' type='text' placeholder='Имя' className='input-name'/>
                                <input name='tel' type='tel'placeholder='Телефон' className='input-tel'/>
                            </div>
                            <input type='text' name='adress' placeholder='Бутик на Невском 103' className='input-adress'/>
                            <button type='button' className='reg-btn'>записаться</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }

}