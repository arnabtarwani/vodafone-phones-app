import React, { ReactNode, useState } from 'react'
import { BiExpand } from 'react-icons/bi';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { useHistory, withRouter } from 'react-router-dom';

interface IPhoneGalleryBox {
    frontImg?: string | any,
    backImg?: string | any,
    phoneName?: string,
    initialPhonePrice?: string,
    initialPhonePlan?: string,
    monthlyCost?: string,
    onOpen?: () => void,
    link?: string,
    phoneData?: object,
    initialPlanName?: string,
    initialPlanPrice?: string,
    currency?: string,
    outOfStock?: boolean,
}

const PhoneGalleryBox: React.FC<IPhoneGalleryBox> = (props) => {

    const history = useHistory()

    const { onOpen, link, phoneData } = props

    const [hover, setHover] = useState(false)
    const [hoverText, setHoverText] = useState(false)

    const handleClick = (link: string, state: any) => {
        history.push(`/${link}`, state)
    }

    return (
        <div className="lg:w-1/3 md:w-1/4 p-4 w-1/3 h-full">
            <div className="flex relative h-70 rounded bg-gray-100 overflow-hidden cursor-pointer border-1 border-gray-500 p-4 justify-center"
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={onOpen}>
                <img alt="ecommerce" className="object-cover object-center block self-center" src={props.frontImg}
                    width="130px"
                    height="160px"
                />
                {props.outOfStock && <div className="absolute top-3 left-3 text-red-500 bg-gray-600 bg-opacity-10 p-2 rounded-md">
                    Out of Stock
                </div>}
                {hover && (
                    <div className="absolute top-3 right-3 hover:text-gray-50 bg-gray-600 bg-opacity-10 p-2 rounded-md cursor-pointer hover:bg-gray-400"
                        onClick={onOpen}
                    >
                        <BiExpand size={20} />
                    </div>
                )}
            </div>
            <div onClick={() => handleClick(`${link}`, phoneData)} className="text-gray-900 no-underline cursor-pointer justify-between"
                onMouseOver={() => setHoverText(true)}
                onMouseLeave={() => setHoverText(false)}>
                <div className="hover:bg-gray-400 hover:bg-opacity-20 p-3 mt-2 rounded-md flex flex-row text-sm justify-between">
                    <div>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{props.phoneName}</h2>
                        <p className="mt-1 text-gray-900 font-extralight">{props.initialPhonePrice} | {props.initialPlanName} | {props.currency} {props.initialPlanPrice}</p>
                    </div>
                    <div className="self-center flex flex-row justify-center items-center mt-1 font-extralight">
                        {hoverText && (<>More details <RiArrowDropRightLine /></>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneGalleryBox
