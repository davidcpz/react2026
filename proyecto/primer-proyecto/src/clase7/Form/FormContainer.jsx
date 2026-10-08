import { FormUI } from "./FormUI";
import { useState } from "react";




export const FormContainer = ({}) => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        const updateData = {...formData, [name]: value};
        setFormData(updateData);
    }

        const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateForm(formData);

        if (Object.keys(error).length > 0) {
            setErrors(error);
        }else {
            setErrors({});
            console.log(formData);
            setFormData({
                name: "",
                lastName: "",
                email: "",
                message: "",
            });
        }


    
        return <FormUI
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            formData={formData}
        />
    
    };

};
