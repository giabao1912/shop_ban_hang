import {Component} from "react"
import React from "react"

import { int2VND } from "../utils/function"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";


import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

const PageWrapper = (props) => {
    
    const globalState = useSelector((state) => state.cart.products);
    const res = useSelector((state) => {
        let tt = 0
        for(let i of state.cart.products){
            tt += i.productDetals.price * i.orderDetals.quantity
        }

        return tt
    })

    console.log("globalState",globalState)


    return(<>

    <div>
        
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="header__top__left">
                                <p>Free shipping, 30-day return or refund guarantee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                            <a href="./"><img src="/img/logo.png" alt=""/></a>
                        </div>
                    </div>
                    {/* <HashRouter> */}
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className={/*router.pathname == '/' ? "active" : */""}><NavLink to="/">Home</NavLink></li>
                                <li className={/*router.pathname != '/' ? "active" : */""}><NavLink to="/shop">Shop</NavLink></li>

                            </ul>
                        </nav>
                    </div>
                    {/* </HashRouter> */}
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            {/* <a href="#" className="search-switch"><img src="/img/icon/search.png" alt=""/></a>
                            <a href="#"><img src="/img/icon/heart.png" alt=""/></a> */}
                            <NavLink to="/shopping-cart"><img src="/img/icon/cart.png" alt=""/>  <span>0</span></NavLink>
                            <div className="price">{int2VND(res)} VND</div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><i className="fa fa-bars"></i></div>
            </div>
        </header>
    </div> 
    
    {props.children}

    {/* {React.cloneElement(props.children, { addCart: addCart })} */}

    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                    <div className="footer__logo">
                        <a href="#"><img src="/img/footer-logo.png" alt=""/></a>
                    </div>
                    <p>The customer is at the heart of our unique business model, which includes design.</p>
                    <a href="#"><img src="/img/payment.png" alt=""/></a>
                </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer__widget">
                    <h6>Shopping</h6>
                    <ul>
                        <li><a href="#">Clothing Store</a></li>
                        <li><a href="#">Trending Shoes</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Sale</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer__widget">
                    <h6>Shopping</h6>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Delivary</a></li>
                        <li><a href="#">Return & Exchanges</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                <div className="footer__widget">
                    <h6>NewLetter</h6>
                    <div className="footer__newslatter">
                        <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                        <form action="#">
                            <input type="text" placeholder="Your email"/>
                            <button type="submit"><span className="icon_mail_alt"></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="footer__copyright__text">
                    
                    {/* <p>Copyright ©
                        <script>
                            document.write(new Date().getFullYear());
                        </script>2020
                        All rights reserved | This template is made with <i className="fa fa-heart-o"
                        aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p> */}
                    
                </div>
            </div>
        </div>
    </div>
    </footer>

    <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">+</div>
            <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
    
    </>)
        
    
}


export default PageWrapper