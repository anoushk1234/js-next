import { Metaplex } from './Metaplex';

export type MetaplexPlugin = {
  install(metaplex: Metaplex): any;
};
