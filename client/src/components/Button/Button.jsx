import React from 'react'

const Button = ({ children, type, px, py, color, backgroundColor, hoverBg, border, onClick}) => {

    const style = {
        padding: `${py} ${px}`,
        color,
        backgroundColor,
        transition: '0.3s',
        border: `solid 1px ${border || 'transparent'}`,
        cursor: 'pointer',
        borderRadius: '4px',
        fontWeight: '500'
    }

    const hoverEffectEnter = (e) => {
        e.target.style.backgroundColor = hoverBg
    }

    const hoverEffectLeave = (e) => {
        e.target.style.backgroundColor = backgroundColor
    }


    return (
        <button type={type} style={style} onClick={onClick} onMouseEnter={hoverEffectEnter} onMouseLeave={hoverEffectLeave}>
            {children}
        </button>
    )
}

export default Button;
