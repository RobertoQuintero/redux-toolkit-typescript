import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from 'react-redux';
import { type RootState, type Dispatch } from '../../redux/store';

export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
