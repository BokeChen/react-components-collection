import { globalModel } from './global.model';
import { GlobalModel } from './modelTypes/global.types';

export interface StoreModel {
  globalModel: GlobalModel;
}

export const storeModel: StoreModel = {
  globalModel,
};
