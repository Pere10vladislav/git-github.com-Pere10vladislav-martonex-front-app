import { useState } from "react";
import { Button, Input, Checkbox, Tooltip, Flex, Select, DatePicker } from 'antd';
import { InfoCircleOutlined, StarOutlined, LeftOutlined, GoogleCircleFilled, AppleFilled, PhoneOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function Profile({ nextStep, formValues, handleInputChange, handleSelectChange, handleDateChange }) {
    const isFormValid = () => {
        return Object.values(formValues).every(value => value);
    };

    return (
        <>            
            <div className="h2Span">
                <h2>
                    Введите ваш номер телефона
                </h2>
            </div>
            <div className="ProfileBlock">
                <div className="marginB16"> 
                    <Input 
                        prefix={<PhoneOutlined />}
                        className="disabledInput" 
                        placeholder="Ваш номер телефона" 
                        name="phoneNumber"
                        value={formValues.phoneNumber} 
                        onChange={handleInputChange} 
                        disabled
                    />
                    <Input 
                        placeholder="Ваше имя" 
                        name="firstName"
                        value={formValues.firstName} 
                        onChange={handleInputChange} 
                    />
                    <Input 
                        placeholder="Ваша фамилия" 
                        name="lastName"
                        value={formValues.lastName} 
                        onChange={handleInputChange} 
                    />
                    <Select
                        className="widthMax"
                        name="gender"
                        onChange={(value) => handleSelectChange('gender', value)}
                        placeholder="Пол"
                        options={[
                            {
                                value: 'male',
                                label: <span>Мужской</span>,
                            },
                            {
                                value: 'female',
                                label: <span>Женский</span>,
                            },
                        ]}
                    />
                    <DatePicker
                        className="widthMax"
                        placeholder="Дата рождения" 
                        value={formValues.birthDate}
                        onChange={handleDateChange} 
                    />
                    <Input 
                        placeholder="Email" 
                        name="email"
                        value={formValues.email} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="marginB16">
                    By joining you agree with <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a> agreements
                </div>
                <Button className="widthMax btn" type="primary" onClick={nextStep} disabled={!isFormValid()}>
                    Sign up
                </Button>
            </div>
        </>
    );
}
