
import React from 'react';
import * as Yup from 'yup';

const useHome = () => {

    const URL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/


    return {URL}
}

export default useHome