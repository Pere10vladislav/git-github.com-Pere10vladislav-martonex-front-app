import { useState, useEffect } from "react"
import { Button, Input, Checkbox, Tooltip, Flex, Select, DatePicker } from 'antd';
import { InfoCircleOutlined, StarOutlined, LeftOutlined, GoogleCircleFilled, AppleFilled, PhoneOutlined } from '@ant-design/icons';
import axios, { Axios } from "axios";

import DrawerCustom from '../../../components/DrawerCustom'

export default function Telephone({nextStep, formValues, handleInputChange, isFilled}) {
    const [open, setOpen] = useState(false);
    const [counter, setCounter] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [user, setUser] = useState()
    const [error, setError] = useState(false)
    const [loadingm, setLoading] = useState(false)

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
          const user = response.data.find(item => item.number === formValues.phoneNumber);
          setUser(user);
        } catch (error) {
          console.error(error);
        }
      }
    };

    const onChange = (text) => {

        if(text === user?.numberConfim){
            setError(false)
            setLoading(true)
            nextStep()
        } else {
            console.log(2)
            setError(true)
        }
      };

    const sharedProps = {
        onChange,
    };

    return (
        <>            
            <div>
                <h2>
                    Введите ваш номер телефона
                </h2>
            </div>
            <div>
                <Input
                    name="phoneNumber"
                    placeholder="Ваш номер телефона"
                    value={formValues.phoneNumber} 
                    onChange={handleInputChange} 
                    maxLength={12}
                />
                <Button className="widthMax btn" type="primary" onClick={sendMessage} disabled={isFilled}>
                    Подтвердить номер
                </Button>
                <DrawerCustom 
                    onClose={onClose} 
                    open={open} 
                    counter={counter} 
                    sharedProps={sharedProps} 
                    loadingm={loadingm} 
                    error={error}
                ></DrawerCustom>
            </div>
        </>
    )
}
