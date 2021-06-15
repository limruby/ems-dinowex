import {useMutation} from 'react-query';
import { login } from './auth.services';

export function useLogin() {
  return useMutation(login);
}
