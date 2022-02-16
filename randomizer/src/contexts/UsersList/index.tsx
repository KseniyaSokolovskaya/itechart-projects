import { useContext } from 'react';
import Context from './Context';
import Provider from './Provider';
import type { IUserListContext } from './Context';

const useUserListContext = (): IUserListContext => useContext(Context);

export { Provider };
export default useUserListContext;
