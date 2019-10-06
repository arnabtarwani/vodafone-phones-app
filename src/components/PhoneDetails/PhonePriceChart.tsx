import React from 'react'

interface IPhonePriceChart {
    data: any
}

const PhonePriceChart = (props: IPhonePriceChart) => {

    const { data } = props

    return (
        <section className="text-gray-600 body-font">
            <div className="container py-14 mx-auto">
                <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="text-3xl mb-4 text-gray-700 border-0 ml-0">Pricing</h1>
                </div>
                <div className="lg:w-9/12 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Currency</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan Name</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Plan Price</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Phone Price</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Data Allowance</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Extras</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(data).map((item: any, key) => {
                                return (<tr key={key}>
                                    <td className="px-4 py-3">{item.currency}</td>
                                    <td className="px-4 py-3">{item.planName}</td>
                                    <td className="px-4 py-3">{item.planPrice}</td>
                                    <td className="px-4 py-3">{item.phonePrice}</td>
                                    <td className="px-4 py-3">{item.dataAllowance}</td>
                                    <td className="px-4 py-3">{item.freeExtra}</td>
                                    <td className="px-4 py-3">
                                        <button className="bg-indigo-700 text-gray-50 p-2 font-thin text-sm w-auto rounded-md hover:bg-indigo-600">Add to Cart</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default PhonePriceChart;
