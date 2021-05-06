import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>pre-junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>junior+</NavLink>
            </div>
            <div className={s.square}>
            </div>
        </div>
    )
}

export default Header
