import React, { useState } from 'react';
import { Collapse, Select } from 'antd';
import { InfoCircleOutlined, StarOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Panel } = Collapse;

export default function CustomCollapse ({formValues, handleSelectChange}) {
  const [activeKey, setActiveKey] = useState([]);

  const getText = () => {
    switch (formValues.status) {
      case 'silver':
        return (
        <div>
          <h2>Что вы получаете приобретая подписку Silver:</h2>
          <div>
            <p>◦ Бронирование гостиниц ( в том числе, за рубежом)</p>
            <p>◦ Бронирование ресторанов ( в том числе, за рубежом )</p>
            <p>◦ Покупка и бронирование билетов (в том числе, через зарубежные авиакомпании)</p>
            <p>◦ Персонализированная подборка заведений и мероприятий</p>
            <p>◦ Обеспечение конфиденциальности в различных жизненных сферах</p>
          </div>
        </div>)
        break;
      case 'gold':
        return (
          <div>
            <h2>Что вы получаете приобретая подписку Gold:</h2>
            <div>
              <p>◦ Личный менеджер</p>
              <p>◦ VISA support</p>
              <p>◦ Индивидуальные туры в любую точку мира ( с учетом всех запросов и пожеланий)</p>
              <p>◦ Индивидуальные трансферы ( в любой точке мира)</p>
              <p>◦ Организация перелетов PRIVATE JET, JET SHARING</p>
              <p>◦ Бронирование Яхт и вертолетов ( в том числе, за рубежом)</p>
              <p>◦ Перевозка животных зарубеж ( полное сопровождение)</p>
              <p>◦ Страхование и медицинские услуги (в том числе, за рубежом)</p>
              <p>◦ Услуги переводчика (в любой стране)</p>
              <p>◦ VIP проходы, Fast Track</p>
              <p>◦ подбор, покупка и доставка цветов и подарков</p>
              <p>◦ подбор специалистов для дома (сантехник, электрик, строитель и др.)</p>
              <p>◦ организация курьерских доставок по России и за рубежом</p>
              <p>◦ организация покупок (поиск товара, сравнение, помощь в оформлении, организация доставки)</p>
              <p>◦ помощь в организации мероприятий разного уровня (детские праздники, дни рождения и др)</p>
              <p>◦ Обеспечение физической безопасности (в том числе в поездках зарубежом)</p>
              <p>◦ Сопровождение на сделках (с разным уровнем обеспечения безопасности)</p>
              <p>◦ Проверка контрагентов и подрядчиков (многоуровневая)</p>
            </div>
          </div>)
          break;
      case 'platinum':
        return (<>platinum</>)
        break;
      default:
        break;
    }
  }


  const handleToggle = (key) => {
    setActiveKey((prev) => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
      <Collapse 
        activeKey={activeKey} 
        expandIcon={({ isActive }) => <InfoCircleOutlined onClick={() => handleToggle('1')} rotate={isActive ? 0 : 0} />}
        expandIconPosition={'end'}
        className='reverse-collapse marginB16'
        style={{
            borderRadius: '90px',
        }}
    >
        <Panel 
            header={<CustomSelect formValues={formValues} handleSelectChange={handleSelectChange}/>} 
            key="1" 
            style={{
                background: '#2B2B2B',                
            }}
        >
            {getText()}
        </Panel>
      </Collapse>
  );
}

function CustomSelect({formValues, handleSelectChange}) {

    return (
    <div className='CustomSelect'>
        <span className='CustomSelectPrefix'>
            <StarOutlined/>
            <span>Статус:   </span>
        </span>
        
        <Select 
            placement={'bottomLeft'}
            className='CustomSelectBody'
            name="status"
            value={formValues.status}
            defaultValue="silver"

            onChange={(value) => handleSelectChange('status', value)}
            options={[
                {
                  value: 'silver',
                  label: <span className="SelectBlockOption"><span>Silver</span><span>20$</span></span>,
                },
                {
                  value: 'gold',
                  label: <span className="SelectBlockOption"><span>Gold</span><span>250$</span></span>,
                },
                {
                  value: 'platinum',
                  label: <span className="SelectBlockOption"><span>Platinum</span><span>500$</span></span>,
                },
              ]}
        >
        </Select>
    </div>
)};
