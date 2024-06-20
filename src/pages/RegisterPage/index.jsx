import { useState } from "react"
import { Button, Input, Checkbox, Tooltip, Flex, Select, DatePicker } from 'antd';
import { InfoCircleOutlined, StarOutlined, LeftOutlined, GoogleCircleFilled, AppleFilled, PhoneOutlined } from '@ant-design/icons';
    
import Main from './components/Main'
import Telephone from './components/Telephone'
import Profile from './components/Profile'
import Wish from './components/Wish'
import DetailsWish from './components/DetailsWish'
import Status from './components/Status'

export default function RegisterPage() {
    const [isFilled, setIsFilled] = useState(true);
    const [currentStep, setCurrentStep] = useState(1);
    const [formValues, setFormValues] = useState({
        phoneNumber: '',
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: null,
        email: '', 
        status: 'Silver', 
    });
    const [ wishData, setWishData ] = useState([
        {
            name: 'Отдых',
            checked: false,
            details: [
                {
                    name: 'Путишествия',
                    checked: false
                },
                {
                    name: 'Яхты',
                    checked: false
                },
                {
                    name: 'Авиабилеты',
                    checked: false
                },
            ]
            
        },
        {
            name: 'Автомобили',
            checked: false,
            details: [
                {
                    name: 'Спортивные',
                    checked: false
                },
                {
                    name: 'Офроад',
                    checked: false
                },
                {
                    name: 'Дрифт',
                    checked: false
                },
            ]
        },
        {
            name: 'Музыка',
            checked: false,
            details: [
                {
                    name: 'Рок',
                    checked: false
                },
                {
                    name: 'Реп',
                    checked: false
                },
                {
                    name: 'Джаз',
                    checked: false
                },
                {
                    name: 'Классика',
                    checked: false
                },
                {
                    name: 'Орган',
                    checked: false
                },
                {
                    name: 'Живая музыка',
                    checked: false
                },
            ]
        },
       
    ])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name==='phoneNumber'){
            let inputValue = e.target.value;

            // Add "+" at the beginning if not already present
            if (!inputValue.startsWith('+')) {
                inputValue = '+' + inputValue;
            }
            if (inputValue.length >= 3 && inputValue[2] !== ' ') {
                inputValue = inputValue.slice(0, 2) + ' ' + inputValue.slice(2);
            }
        
            const reg = /^\+?(\d\s?)*$/;
        
            if (reg.test(inputValue)) {
                setFormValues({
                    ...formValues,
                    [name]: inputValue
                });
                setIsFilled(inputValue.length < 10); // обновить состояние isFilled
            }
        }else{
            setFormValues({
                ...formValues,
                [name]: value
            });
        }
    };

    const handleSelectChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        });
    };
    const handleDateChange = (date) => {
        setFormValues({
            ...formValues,
            birthDate: date
        });
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
    };
  
    const prevStep = () => {
        setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    };
  
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <Main nextStep={nextStep}/>;
            case 2:
                return <Telephone nextStep={nextStep} formValues={formValues} handleInputChange={handleInputChange} isFilled={isFilled}/>;
            case 3:
                return <Profile nextStep={nextStep} formValues={formValues} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} handleDateChange={handleDateChange}/>;
            case 4:
                return <Wish nextStep={nextStep} formValues={formValues} handleInputChange={handleInputChange} wishData={wishData} setWishData={setWishData}/>;
            case 5:
                return <DetailsWish nextStep={nextStep} formValues={formValues} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} wishData={wishData} setWishData={setWishData}/>;
            case 6:
                return <Status nextStep={nextStep} formValues={formValues} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange}/>;

            default:
                return <div>Invalid Step</div>;
        }
    };
  
    return (
        
        <div className="registerPage page">
            <div className="prevStepBlock">
                <LeftOutlined onClick={prevStep} className={ currentStep === 1 ? "hidden" : "" } />
            </div>
            <div></div>
            <div className="content">
                {renderStepContent()}
            </div>

        </div>
    );
  };






// details

