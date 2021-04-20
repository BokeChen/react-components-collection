export interface RouteNode {
  path: string;
  name?: string;
  // icon?: React.ElementType | string;
  iconType?: string;
  /** 重定向不能与布局组件同时使用，同时使用时会忽略重定向（可以通过布局组件内部处理解决） */
  redirect?: string;
  /** 菜单布局组件会使用 */
  hideInMenu?: boolean;
  /** 是否是布局组件（默认 `false`）  */
  layout?: boolean;
  /** 当 `layout` 为 `true` 时，该组件会作为布局组件，接收 `router` (routes 别名) 及其它属性值，*/
  component?: React.ComponentType<any>;
  /** 用到的布局相关的子模块 */
  child?: React.ComponentType<any>;
  routes?: RouteNode[];
  /** 授权 */
  authority?: any[];
  /** 拥有子菜单 */
  hasSubMenu?: boolean;
  /** 预留自定义属性 */
  [otherProp: string]: any;
}
