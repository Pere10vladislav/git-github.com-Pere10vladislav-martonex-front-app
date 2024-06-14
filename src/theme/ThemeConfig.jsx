import { ConfigProvider } from 'antd';
import { TinyColor } from '@ctrl/tinycolor';

export default function ThemeConfig({children}) {
    const colors = ['#40e495', '#30dd8a', '#2bb673'];

    const getHoverColors = (colors) =>
        colors.map((color) => new TinyColor(color).lighten(5).toString());
      const getActiveColors = (colors) =>
        colors.map((color) => new TinyColor(color).darken(5).toString());
return (
    <ConfigProvider
    theme={{
    components: {
        Button: {
        colorPrimary: `linear-gradient(135deg, ${colors.join(', ')})`,
        colorPrimary: `linear-gradient(135deg, ${colors.join(', ')})`,
        colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors).join(', ')})`,
        colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors).join(', ')})`,
        borderColorDisabled: `#0958d9`,
        borderRadius: '90px',
        height: '45px',  // Изменение радиуса кнопок
        lineWidth: 0,
        defaultColor: 'rgba(23, 23, 23)',
        },
    },
    }}
    >
        {children}
    </ConfigProvider>
)}
