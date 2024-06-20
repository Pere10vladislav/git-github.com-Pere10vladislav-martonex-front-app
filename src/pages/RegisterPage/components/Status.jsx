import { Button, Select } from 'antd';
import CustomCollapse from "./CustomCollapse";


export default function Status({nextStep, formValues, handleSelectChange}) {
    const dataConsole = (data) => {
        console.log(data)
    }


    return (
        <>            
            <div className="h2Span">
                <h2>
                    Хотите получить статус?
                </h2>
                <span>
                    Активируя статус, вам откроется больше возможностей
                </span>
            </div>
            <div>
            


            {/* <div className="SelectBlock" >
            </div> */}
            <CustomCollapse formValues={formValues} handleSelectChange={handleSelectChange}/>

            <Button className="widthMax btn" type="primary" onClick={dataConsole(formValues)}>
                Оплатить сейчас
            </Button>
            </div>
        </>
    )
}
