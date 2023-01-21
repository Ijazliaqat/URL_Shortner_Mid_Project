
import React from 'react';
import * as Yup from 'yup';

const useHome = () => {
   const initialValue = {
        url: ''
    }

    const SignupSchema = Yup.object().shape({
        url: Yup.mixed().required('Please Enter Your')
    });


    return {initialValue, SignupSchema}
}

export default useHome