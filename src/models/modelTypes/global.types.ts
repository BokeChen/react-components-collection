export enum Roles {
  /** 超级管理员 */
  SuperAdmin = 'SuperAdmin',
  /** 普通管理员 */
  Admin = 'Admin',
  /** 普通账号 */
  User = 'User',
  /** 游客，没有任何权限 */
  Guest = 'Guest',
}

export interface UserInfo {
  id: string | number;
  name: string;
  role: Roles;
}
export interface GlobalModel {
  userInfo: UserInfo;
}
