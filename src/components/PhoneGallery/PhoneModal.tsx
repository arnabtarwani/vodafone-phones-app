import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import PhonePictureCarousel from '../PhoneDetails/PhonePictureCarousel'

interface IPhoneModalProps {
    onClose: () => void,
    title?: string,
    brand?: string,
    price?: string,
    initialPlanName?: string,
    initialPlanPrice?: string,
    currency?: string,
    images?: any
}

const PhoneModal: React.FC<IPhoneModalProps> = (props) => {

    const { onClose, title, brand, price, initialPlanName, initialPlanPrice, currency, images } = props


    return (
        <div className="fixed flex top-0 w-full h-full min-h-full items-center justify-center bg-gray-800 bg-opacity-80 z-50 overflow-y-hidden">
            <div className="flex flex-col w-9/12 h-5/6 bg-gray-50 p-6 overflow-hidden rounded-lg">
                <div className="hover:bg-gray-50 text-gray-50 hover:text-gray-800 hover:opacity-90 rounded-md absolute right-5 top-5" onClick={onClose}>
                    <button className="p-2">
                        <CgCloseO size={25} />
                    </button>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="block">
                        <div className="text-2xl font-normal text-gray-700 m-0">
                            {title}
                        </div>
                        <div className="text-xs font-thin text-gray-500 m-0">
                            by {brand}
                        </div>
                    </div>
                    <div className="block self-end text-right">
                        <div className="text-2xl font-normal text-gray-700 m-0 self-end">
                            {currency} {price}
                        </div>
                        <div className="text-xs font-thin text-gray-500 m-0">
                            {initialPlanName} | {currency} {initialPlanPrice}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 w-full">
                    <PhonePictureCarousel width="240px" height="260px" images={images} />
                </div>
            </div>
        </div>
    )
}

export default PhoneModal;