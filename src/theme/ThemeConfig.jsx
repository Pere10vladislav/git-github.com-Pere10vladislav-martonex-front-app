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
    token: {
        borderRadius: '90',
        controlHeight: '45',
        colorText: 'rgb(255, 255, 255)',
        colorBgElevated: 'rgb(32, 32, 32)',
        colorIcon:  'rgba(255, 255, 255, 0.25)',

    },
    components: {
        Button: {
        colorPrimary: `linear-gradient(135deg, ${colors.join(', ')})`,
        colorPrimary: `linear-gradient(135deg, ${colors.join(', ')})`,
        colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors).join(', ')})`,
        colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors).join(', ')})`,
        defaultHoverBg: 'rgb(32, 32, 32)',
        borderColorDisabled: 'unse',
        defaultBg: 'rgb(32, 32, 32)',
        defaultColor: 'rgb(255, 255, 255)',
        defaultActiveBg: 'rgb(32, 32, 32)',
        defaultHoverColor: 'rgb(255, 255, 255)',
        borderRadius: '90px',
        height: '45px',  // Изменение радиуса кнопок
        lineWidth: 0,
        },
        Input: {
            activeBg: 'rgb(255 255 255 / 0%)',
            colorBgContainer: 'rgb(255 255 255 / 0%)',
            activeBorderColor: 'rgb(124, 124, 124)',
            hoverBorderColor: 'rgb(124, 124, 124)',
            colorTextPlaceholder: 'rgb(124, 124, 124)',
            borderRadius: '90px',


        },
        Select: {
            clearBg: 'rgb(255 255 255 / 0%)',
            selectorBg : 'rgb(255 255 255 / 0%)',
            colorPrimaryHover: 'rgb(124, 124, 124)',
            colorPrimary: 'rgb(124, 124, 124)',
            colorTextPlaceholder: 'rgb(255, 255, 255, 0.25)',
            optionSelectedBg: 'rgb(255 255 255 / 0%)',
            colorBgContainer: 'rgb(255 255 255 / 0%)',
            colorTextQuaternary:  'rgba(255, 255, 255, 0.25)',
            multipleItemColorDisabled: 'rgba(255, 255, 255, 0.25)',


        },
        DatePicker: {
            activeBg: 'rgb(255 255 255 / 0%)',
            colorBgContainer: 'rgb(255 255 255 / 0%)',
            activeBorderColor: 'rgb(124, 124, 124)',
            hoverBorderColor: 'rgb(124, 124, 124)',
            colorTextPlaceholder: 'rgb(124, 124, 124)',
            colorTextDisabled: 'rgba(255, 255, 255, 0.25)',
        },
        Collapse: {
            contentBg: '#2B2B2B',
        }
    },
    }}
    >
        {children}
    </ConfigProvider>
)}