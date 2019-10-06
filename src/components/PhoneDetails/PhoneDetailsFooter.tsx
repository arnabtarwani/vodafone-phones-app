import React from 'react';

const PhoneDetailsFooter: React.FC<{ summary?: string, data?: any }> = ({ summary, data }) => {

    return (
        <div className="">
            <div className="text-3xl mb-4 text-gray-700">Summary</div>
            <div dangerouslySetInnerHTML={{ __html: summary }} />

            <div className="text-3xl mt-8 mb-4 text-gray-700">Review</div>
            {data != null ? Object.values(data).map((item: any, key) => {
                return (
                    <div className="text-justify" key={key} dangerouslySetInnerHTML={{ __html: item }} />
                )
            }) : null}
        </div>
    );
}

export default PhoneDetailsFooter;
