import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useEffect,
  useState,
} from 'react';
import { type Task } from '../App';

type AppContextProps = {
  data: null | Task[];
  isLoading: boolean;
};

const INITIAL_APP_CONTEXT_VALUE: AppContextProps = {
  data: null,
  isLoading: false,
};

const CollectionContext = createContext<AppContextProps>(
  INITIAL_APP_CONTEXT_VALUE
);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Task[] | null>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setIsLoading(false);
  }, []);

  return <div>CollectionContext</div>;
};
