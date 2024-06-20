import { useState } from "react"
import { Button, Input, Checkbox, Tooltip, Flex, Select, DatePicker } from 'antd';
import { InfoCircleOutlined, StarOutlined, LeftOutlined, GoogleCircleFilled, AppleFilled, PhoneOutlined } from '@ant-design/icons';

export default function WishList({nextStep, formValues, handleInputChange, wishData, setWishData}) {

    const toggleChecked = (index) => {
        const newData = [...wishData];
        newData[index].checked = !newData[index].checked;
        setWishData(newData);
    };

    const isNextButtonDisabled = wishData.filter(item => item.checked).length < 3;


    return (
        <>            
            <div className="h2Span">
                <h2>
                    Выберите ваши пожелания
                </h2>
                <span>
                    Выберите не менее 3 интересов
                </span>
            </div>
            <div>
                <div className="wishBlock">
                    {wishData.map((item,index) => (
                        <Button key={item.name} type={item.checked ? 'primary' : ''} onClick={() => toggleChecked(index)}>
                            <Checkbox className="hidden" checked={item.checked}/>
                            {item.name}
                        </Button>
                    ))}
                </div>
                <div class="liner">
                  <div class="linerBlock"></div>
                </div>   
                <Button className="widthMax btn" type="primary" onClick={nextStep} disabled={isNextButtonDisabled}>
                    Next
                </Button>
            </div>
        </>
    )
}
