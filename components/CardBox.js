// components/CardBox.js

import React from 'react';

export default function CardBox({ children }) {
    return(
        <div className="mb-32 grid text-center  w-[500px]  grid-cols-2  absolute top-[250px] left-[50px] gap-5">
            {children}
        </div>
    )
}
