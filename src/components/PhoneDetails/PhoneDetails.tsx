import React, { useEffect, useState } from 'react'
import PhoneDetailsHeader from './PhoneDetailsHeader'
import PhonePriceChart from './PhonePriceChart'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import PhoneDetailsFooter from './PhoneDetailsFooter'
import PhonePictureCarousel from './PhonePictureCarousel'


const PhoneDetails: React.FC = (props: any) => {

    let data: any = {}
    let images: any = {}


    const [phoneData, setPhoneData] = useState('')
    const [selectedPhoneDataPrice, setSelectedPhoneDataPrice] = useState('')
    // const [selectedPhoneDataImages, setSelectedPhoneDataImages] = useState([])
    const [keySelected, setKeySelected] = useState(0)

    useEffect(() => {
        if (props.location.state) {
            data = props.location.state
            setPhoneData(data)
        }

        if (data) {
            PhoneVariants(data)
        }

    }, [data])

    // const getSelectedVariant = (variant: number) => {

    //     switch (variant) {
    //         case 0:
    //             setKeySelected(0)
    //             break;
    //         case 1:
    //             setKeySelected(1)
    //             break;
    //         default:
    //             setKeySelected(0)
    //             break;
    //     }

    //     return (
    //         <div>
    //             <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    //                 Variant 1
    //             </button>
    //             <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    //                 Variant 2
    //             </button>
    //         </div>
    //     )
    // }

    const PhoneVariants = (data: any) => {
        if (data) {
            Object.values(data.variants[0].phoneImages).map((el: any, key) => images[key] = el)
            Object.values(data.variants).map((item: any, key) => {
                // console.log(images);
                Object.values(item.pricingOptions).map((item: any) => {
                    setSelectedPhoneDataPrice(item.price)
                })
            })
            // setSelectedPhoneDataImages(images)
        }        
    }



    return (
        <section className="text-gray-600 body-font">

            <div className="container px-15 py-14 mx-auto">

                <Link to='/gallery' className="flex flex-row mb-4 w-36 p-1 rounded-md hover:opacity-80 text-indigo-700 hover:text-gray-50 hover:bg-indigo-600 items-center no-underline">
                    <HiOutlineArrowNarrowLeft className="mr-2" />  Back to Gallery
                </Link>


                <PhoneDetailsHeader title={phoneData.name} brand={phoneData.brand} />
                <PhonePictureCarousel images={images} width="280px" height="350px" />
                <PhonePriceChart data={selectedPhoneDataPrice} />
                <PhoneDetailsFooter summary={phoneData.summary} data={phoneData.fieldItems} />
            </div>
        </section>
    )
}

export default PhoneDetails
