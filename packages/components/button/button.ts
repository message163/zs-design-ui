export declare type ButtonColor = 'blue' | 'green' | 'gray' | 'yellow' | 'red'

const defaultName = 'zs'

/** 获取按钮类名 */
export function buttonClassName(componentName: string) {
    const getDefaultName = () => {
        return `${defaultName}-${componentName}`
    }
    const getColorName = (type?: string) => {
        return type ? `${defaultName}-${componentName}--${type}` : ''
    }
    return {
        getDefaultName,
        getColorName
    }
}
