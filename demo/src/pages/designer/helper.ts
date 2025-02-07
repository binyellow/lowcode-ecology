import { material, project } from '@alilc/lowcode-engine'
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { TransformStage } from '@alilc/lowcode-types'
import { message } from 'antd'
/**
 * 将schema和package保存到本地localStorage
 */
export const saveSchema = async () => {
  // 保存schema到localStorage
  window.localStorage.setItem(
    'schema',
    JSON.stringify(project.exportSchema(TransformStage.Save))
  )
  // 保存packages到localStorage
  const packages = await filterPackages(material.getAssets().packages)
  window.localStorage.setItem('packages', JSON.stringify(packages))
  message.success('保存成功')
}

/**
 * 获取页面schema，用于初始化
 */
export const getPageSchema = () => {
  const schema = JSON.parse(window.localStorage.getItem('schema') || '{}')
  const pageSchema = schema.componentsTree?.[0]
  return pageSchema
}
