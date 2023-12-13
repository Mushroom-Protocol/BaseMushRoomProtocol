import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Backend {
  'changeMessage' : ActorMethod<[string], undefined>,
  'getMessage1' : ActorMethod<[], string>,
  'whoami' : ActorMethod<[], Principal>,
}
export interface _SERVICE extends Backend {}
