import { salesState } from '../providers/store/sales.reducer';
import { Sale } from './Sale.Model';

export interface AppState{
    sales:salesState
}