import React from 'react'

interface IPhoneDetailsHeaderProps {
    title: string, 
    brand: string
}

const PhoneDetailsHeader: React.FC<IPhoneDetailsHeaderProps> = (props) => {

    const { title, brand } = props

    return (
        <div className="">
            <div className="block">
                <div className="text-4xl font-normal text-gray-700 m-0">
                    {title}
                </div>
                <div className="text-1xl font-thin text-gray-500 ml-1">
                    by {brand}
                </div>
            </div>
        </div>
    )
}

export default PhoneDetailsHeader
