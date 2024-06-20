import React, { useState } from 'react';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const CustomCollapse = () => {
  const [activeKey, setActiveKey] = useState([]);

  const handleToggle = (key) => {
    setActiveKey((prev) => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <div>
      <Button onClick={() => handleToggle('1')}>Toggle Panel 1</Button>
      <Button onClick={() => handleToggle('2')}>Toggle Panel 2</Button>
      <Button onClick={() => handleToggle('3')}>Toggle Panel 3</Button>
      <Collapse
        activeKey={activeKey}
        className="reverse-collapse"
      >
        <Panel header="This is panel header 1" key="1">
          <p>Content of Panel 1</p>
        </Panel>    
        <Panel header="This is panel header 2" key="2">
          <p>Content of Panel 2</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>Content of Panel 3</p>
        </Panel>
      </Collapse>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: '50px' }}>
      <CustomCollapse />
    </div>
  );
};

export default App;
