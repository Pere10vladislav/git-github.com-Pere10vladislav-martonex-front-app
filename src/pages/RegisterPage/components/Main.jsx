import { useState } from "react"
import { Button, Input, Checkbox, Tooltip, Flex, Select, DatePicker } from 'antd';
import { InfoCircleOutlined, StarOutlined, LeftOutlined, GoogleCircleFilled, AppleFilled, PhoneOutlined } from '@ant-design/icons';

export default function Main({nextStep}) {
    return (
        <>            
            <Flex className="h2Span" vertical='vertical' justify='space-between' align='flex-start'>
                <h2>
                    Экономь свое время с MatronEX
                </h2>
                <span>
                    Станьте участником. Присоединяйтесь к нам!
                </span>
            </Flex>
            <Flex className="widthMax" vertical='vertical' justify='space-between' align='center'>
                <Button className="widthMax btnAutApi"> 
                  <GoogleCircleFilled />
                  Sign in with Google
                </Button>
                <Button className="widthMax btnAutApi">
                  <AppleFilled />
                  Sign in with Google
                </Button>

                <div class="liner">
                  <div class="linerBlock"></div>
                  <div class="linerBlockMain">Or</div>
                  <div class="linerBlock"></div>
                </div>  
                
                <Button className="widthMax btn" type="primary" onClick={nextStep}>
                    Sign up with phone number
                </Button>
                <span>Вы уже участник? <a href="/login">Войти</a></span>
            </Flex>
        </>
    )
}