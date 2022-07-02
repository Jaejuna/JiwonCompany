import React from 'react';
import { Link } from 'react-router-dom';

//Link 태그로 다른 페이지로 이동
//https://velog.io/@velopert/react-router-v6-tutorial
const Empty = () => {
    return (
        <div>
            <h1>This is empty page</h1>
            <Link to ="/signup">로그인 합시다</Link>
        </div>
    );
};

export default Empty;