import React, { FC } from 'react'

const ButtonSm: FC<any> = ({ title, icon, onClick, textStyle, style }) => {
    return (
        <div onClick={onClick} style={{ ...style }} className="bg-4 btn btn-sm column t-center justify-center align-center">
            {icon}
            <p className="text-1" style={{ ...textStyle }} >{title} </p>
        </div>
    )
}

export default ButtonSm
