import { useState } from "react"
import { Input, Drawer, Flex } from 'antd';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';

export default function DrawerCustom({open, onClose, counter, sharedProps, loadingm, error}) {

    return(
        <div className="DrawerCustom">
            <Drawer
                className="DrawerCustom"
                title={<>Подтвердите номер телефона <CloseOutlined onClick={onClose}/></>}
                placement={'bottom'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'bottom'}
            >
                {!loadingm ? 
                    <Flex vertical='vertical' justify='space-between' align='center'>
                        <p>Введите 4 символа из кода, который<br/> был выслан на ваш номер телефона</p>
                        <div className="DrawerCustom_blockInput">
                            <Input.OTP length={4} formatter={(str) => str.toUpperCase()} {...sharedProps} />
                        </div>
                        {error? <div className="error">Код неверный, попробуйте еще раз</div> : <></>}
                        <a>Отправить новый код {counter}</a>
                    </Flex>
                :
                    <>
                        <p>Успешно!</p>
                        <p>Выполняем вхлод</p>
                        <LoadingOutlined spin />
                    </>
                }
            </Drawer>
        </div>
    )
}