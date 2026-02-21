import React from 'react'

export function CustomLogo(props: any) {
    const { renderDefault, title } = props

    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FF5722] flex items-center justify-center text-white font-bold text-xl">
                Y
            </div>
            <span className="font-bold text-[#FF5722] text-xl tracking-wide">{title || 'YourMeals'}</span>
        </div>
    )
}
