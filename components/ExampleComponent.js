// components/ExampleComponent.js

import React, { useEffect } from 'react';

export default function ExampleComponent() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/test'); // バックエンドのエンドポイントに変更する
                const data = await response.json();
                console.log('Data from server:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <p>サーバーより</p>
        </div>
    )
}
   