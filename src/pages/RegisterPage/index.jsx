import { useState } from "react"
import { Button, Input, Checkbox, Tooltip } from 'antd';
import { InfoCircleOutlined, StarOutlined, UserOutlined, LeftOutlined } from '@ant-design/icons';


export default function RegisterPage() {
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
            case 3:
                return <Profile nextStep={nextStep}/>;
            case 4:
                return <Wish nextStep={nextStep}/>;
            case 5:
                return <Status nextStep={nextStep}/>;
            default:
                return <div>Invalid Step</div>;
        }
    };
  
    return (
      <div>
        <div>
            <LeftOutlined onClick={prevStep} className={ currentStep === 1 ? "hidden" : "" } />
            <UserOutlined />
        </div>
        {renderStepContent()}
      </div>
    );
  };

// function RegisterPage() {
//     const [] = useState()
//     return (
//         <>
//             {/* <Header/> */}
//             <>
                
//                 <UserOutlined />
//             </>
//             <Status    />
            
//         </>
//     )
// }

function Main({nextStep}) {
    return (
        <>            
            <div>
                <h2>
                    Экономь свое время с MatronEX
                </h2>
                <span>
                    Станьте участником. Присоединяйтесь к нам!
                </span>
            </div>
            <div>
                <Button>Default</Button>
                <Button>Default</Button>
                <span>or</span>
                <Button type="primary" onClick={nextStep}>
                    Sign up with phone number
                </Button>
                <span>Вы уже участник? <a href="/login">Войти</a></span>
            </div>
        </>
    )
}

function Telephone({nextStep}) {
    return (
        <>            
            <div>
                <h2>
                    Введите ваш номер телефона
                </h2>
            </div>
            <div>
                <Input placeholder="Ваш номер телефона" />
                <Button type="primary" onClick={nextStep}>
                    Подтвердить номер
                </Button>
            </div>
        </>
    )
}

function Profile({nextStep}) {
    return (
        <>            
            <div>
                <h2>
                    Введите ваш номер телефона
                </h2>
            </div>
            <div>
                <Input 
                    suffix={
                        <Tooltip title="Extra information">
                          <InfoCircleOutlined
                            style={{
                              color: 'rgba(0,0,0,.45)',
                            }}
                          />
                        </Tooltip>
                    }
                    placeholder="Filled"
                    variant="filled"
                />
                <Input placeholder="Ваше имя" />
                <Input placeholder="Ваша фамилия" />
                <Input placeholder="Дата рождения" />
                <Input placeholder="Email" />
                <span>By joining you agree with <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a> agreements</span>
                <Button type="primary" onClick={nextStep}>
                    Sign up
                </Button>
            </div>
        </>
    )
}

function Wish({nextStep}) {
    const [ data, setData ] = useState([
        {
            name: 'Отдых',
            checked: false
        },
        {
            name: 'Путишествия',
            checked: false
        },
        {
            name: 'Яхты',
            checked: false
        },
        {
            name: 'Развитие',
            checked: false
        },
        {
            name: 'Музыка',
            checked: false
        },
        {
            name: 'Авиабилеты',
            checked: false
        },
        {
            name: 'Мероприятия',
            checked: false
        }, 
        {
            name: 'Заведения',
            checked: false
        },
        {
            name: 'Горы',
            checked: false
        }
    ])

    const toggleChecked = (index) => {
        const newData = [...data];
        newData[index].checked = !newData[index].checked;
        setData(newData);
    };

    return (
        <>            
            <div>
                <h2>
                    Выберите ваши пожелания
                </h2>
                <span>
                    Выберите не менее 3 интересов
                </span>
            </div>
            <div>
            <div>
                {data.map((item,index) => (
                    <Button key={item.name} type={item.checked ? 'primary' : ''} onClick={() => toggleChecked(index)}>
                        <Checkbox className="hidden" checked={item.checked}/>
                        {item.name}
                    </Button>
                ))}
            </div>
            <Button type="primary" onClick={nextStep}>
                Next
            </Button>
            </div>
        </>
    )
}

function Status({nextStep}) {
    return (
        <>            
            <div>
                <h2>
                    Хотите получить статус?
                </h2>
                <span>
                    Активируя статус, вам откроется больше возможностей
                </span>
            </div>
            <div>

            <Input 
                prefix={<><StarOutlined /> Статус:</>}
                suffix="$20"
                value='Silver'
                type="disable"
            />

            <Button type="primary">
                Оплатить сейчас
            </Button>
            </div>
        </>
    )
}