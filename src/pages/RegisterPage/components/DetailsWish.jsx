import { useState } from "react"
import { Button, Input, Checkbox, Tooltip, Flex, Select, DatePicker } from 'antd';
import { InfoCircleOutlined, StarOutlined, LeftOutlined, GoogleCircleFilled, AppleFilled, PhoneOutlined } from '@ant-design/icons';

export default function WishList({nextStep, formValues, handleInputChange, wishData, setWishData}) {



    const isNextButtonDisabled = () => {
        let mainCheckedCount = wishData.filter(item => item.checked).length;
        let detailsCheckedCount = 0;

        wishData.forEach(item => {
            if (item.details) {
                detailsCheckedCount += item.details.filter(detail => detail.checked).length;
            }
        });

        return (mainCheckedCount + detailsCheckedCount) < 6;
    };


    return (
        <>            
            <div className="h2Span">
                <h2>
                    Осталось совсем чуть-чуть...
                </h2>
                <span>
                    Вы выбрали:
                </span>
            </div>
            <div>
                <div>
                    {wishData.map((item, index) => {
                        if (item.checked) {
                            return (
                                <div key={item.name}>
                                    <h3>{item.name}</h3>
                                    {item.details && (
                                        <div className="wishBlock">
                                            {item.details.map((detail, detailIndex) => (
                                                <Button 
                                                    key={detail.name} 
                                                    type={detail.checked ? 'primary' : ''} 
                                                    onClick={() => {
                                                        const newWishData = [...wishData];
                                                        newWishData[index].details[detailIndex].checked = !newWishData[index].details[detailIndex].checked;
                                                        setWishData(newWishData);
                                                    }}
                                                >
                                                    <Checkbox className="hidden" checked={detail.checked} />
                                                    {detail.name}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
          
                <Button className="widthMax btn" type="primary" onClick={nextStep} disabled={isNextButtonDisabled()}>
                    Next
                </Button>
            </div>
        </>
    )
}
