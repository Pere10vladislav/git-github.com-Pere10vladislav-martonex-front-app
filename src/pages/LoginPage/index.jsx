import { useState, useEffect } from "react"
import { Flex, Input, Button } from 'antd';
import { LeftOutlined, UserOutlined } from '@ant-design/icons';

import DrawerCustom from './components/DrawerCustom'
import axios, { Axios } from "axios";
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate


export default function LoginPage() {
    const [currentStep, setCurrentStep] = useState(1);
  
    const nextStep = () => {
        setCurrentStep((prevStep) => (prevStep < 5 ? prevStep + 1 : prevStep));
    };
  
    const prevStep = () => {
        setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <Main nextStep={nextStep} />;
            case 2:
                return <Telephone nextStep={nextStep}/>;
            default:
                return <div>Invalid Step</div>;
        }
    };

    return(
        <div className="loginPage page">
            <div className="prevStepBlock">
                <LeftOutlined 
                  onClick={prevStep} 
                  className={ currentStep === 1 ? "hidden" : "" } 
                  style={{ fontSize: '16px', color: '#43ff64d9' }}
                />
            </div>
            <div></div>
            <div className="content">
              {renderStepContent()}
            </div>
        </div>
    )
}

function Main({nextStep}) {
    return (
        <>            
            <Flex className="h2Span" vertical='vertical' justify='space-between' align='flex-start'>
                <h2>
                    Мы вас ждали!
                </h2>
                <span>
                    Войдите в свою учетную запись
                </span>
            </Flex>
            <Flex className="widthMax" vertical='vertical' justify='space-between' align='center'>
                <Button className="widthMax">Sign in with Google</Button>
                <Button className="widthMax">Sign in with Google</Button>

                <div class="liner">
                  <div class="linerBlock"></div>
                  <div class="linerBlockMain">Or</div>
                  <div class="linerBlock"></div>
                </div>                
                
                <Button className="widthMax btn" type="primary" onClick={nextStep}>
                    Sign in with phone number
                </Button>
                <span>Вы еще не участник? <a href="/register">Зарегистрироваться</a></span>
            </Flex>
        </> 
    )
}

const Telephone = ({ nextStep }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [counter, setCounter] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [user, setUser] = useState({})
    const [error, setError] = useState(false)
    const [loadingm, setLoading] = useState(false)
    const navigate = useNavigate()

    const sendMessage = async () => {
      setOpen(true);
      if (!messageSent) {
        await getMessage();
        setMessageSent(true);
        setIsRunning(true); // Start the counter
      }
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
      let timer;
      if (isRunning && counter > 0) {
        timer = setInterval(() => {
          setCounter((prevCounter) => prevCounter - 1);
        }, 1000);
      }
  
      if (counter === 0) {
        setIsRunning(false);
      }
  
      return () => clearInterval(timer);
    }, [counter, isRunning]);
  
    const getMessage = async () => {
      if (!isRunning) {
        try {
          const response = await axios.get('https://666beb6449dbc5d7145bc430.mockapi.io/Users');
          const user = response.data.find(item => item.number === value);
          setUser(user);
        } catch (error) {
          console.error(error);
        }
      }
    };

    const onChange = (text) => {

        if(text === user.numberConfim){
          setError(false)
          setLoading(true)
          
          setTimeout(() => {
            navigate('/dashboard');
          }, 5000); // 2 
            

            navigate('/dashboard')
        } else {
            setError(true)
        }
      };

    const sharedProps = {
        onChange,
    };
  
    const handleChange = (e) => {
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
        setValue(inputValue);
        setIsFilled(inputValue.length > 10); // обновить состояние isFilled
      }
    };
  
    return (
        <Flex gap="middle" align="flex-start" vertical>
            <div className="h2Span">
                <h2>Введите ваш номер телефона</h2>
            </div>
            <Flex vertical='vertical' justify='space-between' align='center'>
                <Input
                    className="widthMax"
                    value={value}
                    placeholder="Ваш номер телефона"
                    onChange={handleChange}
                    maxLength={12}
                />
                <Button className="widthMax btn" type="primary" onClick={sendMessage} disabled={!isFilled}>
                    Войти по СМС
                </Button>
            </Flex>
            <DrawerCustom 
                onClose={onClose} 
                open={open} 
                counter={counter} 
                sharedProps={sharedProps} 
                loadingm={loadingm} 
                error={error}
            ></DrawerCustom>
        </Flex>
    );
  };