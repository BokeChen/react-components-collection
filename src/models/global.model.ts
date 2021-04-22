import { GlobalModel, Roles } from './modelTypes/global.types';

export const globalModel: GlobalModel = {
  userInfo: {
    id: 1,
    name: '测试',
    role: Roles.Guest,
  },
};
