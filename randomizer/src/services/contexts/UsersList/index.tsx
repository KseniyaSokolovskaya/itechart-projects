import { useContext } from 'react';
import Context from './Context';
import Provider from './Provider';
import { IUserListContext } from '../../../interfaces';

const useUserListContext = (): IUserListContext => useContext(Context);

export { Provider };
export default useUserListContext;
