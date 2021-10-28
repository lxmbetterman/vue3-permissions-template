/**
 * 主题颜色切换工具函数
 */
import { getThemeStyleName } from '@/utils/cookieTools.js'
const themeGreenWhite = {
  '--el-color-primary': '#41b584',
  '--el-color-primary-light-1': '#54bc90',
  '--el-color-primary-light-2': '#67c49d',
  '--el-color-primary-light-3': '#7acba9',
  '--el-color-primary-light-4': '#8dd3b5',
  '--el-color-primary-light-5': '#a0dac2',
  '--el-color-primary-light-6': '#b3e1ce',
  '--el-color-primary-light-7': '#c6e9da',
  '--el-color-primary-light-8': '#d9f0e6',
  '--el-color-primary-light-9': '#ecf8f3',
  '--el-color-success': '#13ce66',
  '--el-color-success-light': '#d0f5e0',
  '--el-color-success-lighter': '#e7faf0',
  '--el-color-warning': '#ffba00',
  '--el-color-warning-light': '#fff1cc',
  '--el-color-warning-lighter': '#fff8e6',
  '--el-color-danger': '#ff4d4f',
  '--el-color-danger-light': '#ffdbdc',
  '--el-color-danger-lighter': '#ffeded',
  '--el-color-error': '#ff4d4f',
  '--el-color-error-light': '#ffdbdc',
  '--el-color-error-lighter': '#ffeded',
  '--el-color-info': '#909399',
  '--el-color-info-light': '#e9e9eb',
  '--el-color-info-lighter': '#f4f4f5',
  '--el-border-radius-base': '2.5px'
}
const themeBlueBlack = {
  '--el-color-primary': '#1890ff',
  // "--el-color-primary-light-1": #2f9bff;
  // --el-color-primary-light-2: #46a6ff;
  // --el-color-primary-light-3: #5db1ff;
  // --el-color-primary-light-4: #74bcff;
  // --el-color-primary-light-5: #8cc8ff;
  // --el-color-primary-light-6: #a3d3ff;
  // --el-color-primary-light-7: #badeff;
  // --el-color-primary-light-8: #d1e9ff;
  // --el-color-primary-light-9: #e8f4ff;
  '--el-color-success': '#13ce66',
  // --el-color-success-light: #d0f5e0;
  // --el-color-success-lighter: #e7faf0;
  '--el-color-warning': '#ffba00',
  // --el-color-warning-light: #fff1cc;
  // --el-color-warning-lighter: #fff8e6;
  '--el-color-danger': '#ff4d4f',
  // --el-color-danger-light: #ffdbdc;
  // --el-color-danger-lighter: #ffeded;
  '--el-color-error': '#ff4d4f',
  // --el-color-error-light: #ffdbdc;
  // --el-color-error-lighter: #ffeded;
  '--el-color-info': '#909399',
  // --el-color-info-light: #e9e9eb;
  // --el-color-info-lighter: #f4f4f5;
  '--el-border-radius-base': '2.5px'
}

const changeThemeColor = () => {
  const styleName = getThemeStyleName()
  if (styleName === 'GreenWhite') {
    for (const key in themeGreenWhite) {
      // console.log(key)
      document.getElementsByTagName('body')[0].style.setProperty(key, themeGreenWhite[key])
    }
  } else if (styleName === 'BlueBlack') {
    for (const key in themeBlueBlack) {
      // console.log(key)
      document.getElementsByTagName('body')[0].style.setProperty(key, themeBlueBlack[key])
    }
  } else {
    for (const key in themeGreenWhite) {
      document.getElementsByTagName('body')[0].style.setProperty(key, themeGreenWhite[key])
    }
  }
}

export default changeThemeColor
/**
 * 绿白
--el-color-primary: #41b584;
--el-color-primary-light-1: #54bc90;
--el-color-primary-light-2: #67c49d;
--el-color-primary-light-3: #7acba9;
--el-color-primary-light-4: #8dd3b5;
--el-color-primary-light-5: #a0dac2;
--el-color-primary-light-6: #b3e1ce;
--el-color-primary-light-7: #c6e9da;
--el-color-primary-light-8: #d9f0e6;
--el-color-primary-light-9: #ecf8f3;
--el-color-success: #13ce66;
--el-color-success-light: #d0f5e0;
--el-color-success-lighter: #e7faf0;
--el-color-warning: #ffba00;
--el-color-warning-light: #fff1cc;
--el-color-warning-lighter: #fff8e6;
--el-color-danger: #ff4d4f;
--el-color-danger-light: #ffdbdc;
--el-color-danger-lighter: #ffeded;
--el-color-error: #ff4d4f;
--el-color-error-light: #ffdbdc;
--el-color-error-lighter: #ffeded;
--el-color-info: #909399;
--el-color-info-light: #e9e9eb;
--el-color-info-lighter: #f4f4f5;
--el-border-radius-base: 2.5px;

 */
/**
 * 绿黑
            --el-color-primary: #41b584;
            --el-color-primary-light-1: #54bc90;
            --el-color-primary-light-2: #67c49d;
            --el-color-primary-light-3: #7acba9;
            --el-color-primary-light-4: #8dd3b5;
            --el-color-primary-light-5: #a0dac2;
            --el-color-primary-light-6: #b3e1ce;
            --el-color-primary-light-7: #c6e9da;
            --el-color-primary-light-8: #d9f0e6;
            --el-color-primary-light-9: #ecf8f3;
            --el-color-success: #13ce66;
            --el-color-success-light: #d0f5e0;
            --el-color-success-lighter: #e7faf0;
            --el-color-warning: #ffba00;
            --el-color-warning-light: #fff1cc;
            --el-color-warning-lighter: #fff8e6;
            --el-color-danger: #ff4d4f;
            --el-color-danger-light: #ffdbdc;
            --el-color-danger-lighter: #ffeded;
            --el-color-error: #ff4d4f;
            --el-color-error-light: #ffdbdc;
            --el-color-error-lighter: #ffeded;
            --el-color-info: #909399;
            --el-color-info-light: #e9e9eb;
            --el-color-info-lighter: #f4f4f5;
            --el-border-radius-base: 2.5px;

 */

/**
 * 蓝黑

            --el-color-primary: #1890ff;
            --el-color-primary-light-1: #2f9bff;
            --el-color-primary-light-2: #46a6ff;
            --el-color-primary-light-3: #5db1ff;
            --el-color-primary-light-4: #74bcff;
            --el-color-primary-light-5: #8cc8ff;
            --el-color-primary-light-6: #a3d3ff;
            --el-color-primary-light-7: #badeff;
            --el-color-primary-light-8: #d1e9ff;
            --el-color-primary-light-9: #e8f4ff;
            --el-color-success: #13ce66;
            --el-color-success-light: #d0f5e0;
            --el-color-success-lighter: #e7faf0;
            --el-color-warning: #ffba00;
            --el-color-warning-light: #fff1cc;
            --el-color-warning-lighter: #fff8e6;
            --el-color-danger: #ff4d4f;
            --el-color-danger-light: #ffdbdc;
            --el-color-danger-lighter: #ffeded;
            --el-color-error: #ff4d4f;
            --el-color-error-light: #ffdbdc;
            --el-color-error-lighter: #ffeded;
            --el-color-info: #909399;
            --el-color-info-light: #e9e9eb;
            --el-color-info-lighter: #f4f4f5;
            --el-border-radius-base: 2.5px;

 */
/**
 * 蓝白
            --el-color-primary: #1890ff;
            --el-color-primary-light-1: #2f9bff;
            --el-color-primary-light-2: #46a6ff;
            --el-color-primary-light-3: #5db1ff;
            --el-color-primary-light-4: #74bcff;
            --el-color-primary-light-5: #8cc8ff;
            --el-color-primary-light-6: #a3d3ff;
            --el-color-primary-light-7: #badeff;
            --el-color-primary-light-8: #d1e9ff;
            --el-color-primary-light-9: #e8f4ff;
            --el-color-success: #13ce66;
            --el-color-success-light: #d0f5e0;
            --el-color-success-lighter: #e7faf0;
            --el-color-warning: #ffba00;
            --el-color-warning-light: #fff1cc;
            --el-color-warning-lighter: #fff8e6;
            --el-color-danger: #ff4d4f;
            --el-color-danger-light: #ffdbdc;
            --el-color-danger-lighter: #ffeded;
            --el-color-error: #ff4d4f;
            --el-color-error-light: #ffdbdc;
            --el-color-error-lighter: #ffeded;
            --el-color-info: #909399;
            --el-color-info-light: #e9e9eb;
            --el-color-info-lighter: #f4f4f5;
            --el-border-radius-base: 2.5px;
 */
/**
 * 红黑
            --el-color-primary: #f34d37;
            --el-color-primary-light-1: #f45f4b;
            --el-color-primary-light-2: #f5715f;
            --el-color-primary-light-3: #f78273;
            --el-color-primary-light-4: #f89487;
            --el-color-primary-light-5: #f9a69b;
            --el-color-primary-light-6: #fab8af;
            --el-color-primary-light-7: #fbcac3;
            --el-color-primary-light-8: #fddbd7;
            --el-color-primary-light-9: #feedeb;
            --el-color-success: #13ce66;
            --el-color-success-light: #d0f5e0;
            --el-color-success-lighter: #e7faf0;
            --el-color-warning: #ffba00;
            --el-color-warning-light: #fff1cc;
            --el-color-warning-lighter: #fff8e6;
            --el-color-danger: #ff4d4f;
            --el-color-danger-light: #ffdbdc;
            --el-color-danger-lighter: #ffeded;
            --el-color-error: #ff4d4f;
            --el-color-error-light: #ffdbdc;
            --el-color-error-lighter: #ffeded;
            --el-color-info: #909399;
            --el-color-info-light: #e9e9eb;
            --el-color-info-lighter: #f4f4f5;
            --el-border-radius-base: 2.5px;
 */
/**
 * 红白
            --el-color-primary: #f34d37;
            --el-color-primary-light-1: #f45f4b;
            --el-color-primary-light-2: #f5715f;
            --el-color-primary-light-3: #f78273;
            --el-color-primary-light-4: #f89487;
            --el-color-primary-light-5: #f9a69b;
            --el-color-primary-light-6: #fab8af;
            --el-color-primary-light-7: #fbcac3;
            --el-color-primary-light-8: #fddbd7;
            --el-color-primary-light-9: #feedeb;
            --el-color-success: #13ce66;
            --el-color-success-light: #d0f5e0;
            --el-color-success-lighter: #e7faf0;
            --el-color-warning: #ffba00;
            --el-color-warning-light: #fff1cc;
            --el-color-warning-lighter: #fff8e6;
            --el-color-danger: #ff4d4f;
            --el-color-danger-light: #ffdbdc;
            --el-color-danger-lighter: #ffeded;
            --el-color-error: #ff4d4f;
            --el-color-error-light: #ffdbdc;
            --el-color-error-lighter: #ffeded;
            --el-color-info: #909399;
            --el-color-info-light: #e9e9eb;
            --el-color-info-lighter: #f4f4f5;
            --el-border-radius-base: 2.5px;

 */
/**
 *  渐变
            --el-color-primary: #1890ff;
            --el-color-primary-light-1: #2f9bff;
            --el-color-primary-light-2: #46a6ff;
            --el-color-primary-light-3: #5db1ff;
            --el-color-primary-light-4: #74bcff;
            --el-color-primary-light-5: #8cc8ff;
            --el-color-primary-light-6: #a3d3ff;
            --el-color-primary-light-7: #badeff;
            --el-color-primary-light-8: #d1e9ff;
            --el-color-primary-light-9: #e8f4ff;
            --el-color-success: #13ce66;
            --el-color-success-light: #d0f5e0;
            --el-color-success-lighter: #e7faf0;
            --el-color-warning: #ffba00;
            --el-color-warning-light: #fff1cc;
            --el-color-warning-lighter: #fff8e6;
            --el-color-danger: #ff4d4f;
            --el-color-danger-light: #ffdbdc;
            --el-color-danger-lighter: #ffeded;
            --el-color-error: #ff4d4f;
            --el-color-error-light: #ffdbdc;
            --el-color-error-lighter: #ffeded;
            --el-color-info: #909399;
            --el-color-info-light: #e9e9eb;
            --el-color-info-lighter: #f4f4f5;
            --el-border-radius-base: 2.5px;
 */
