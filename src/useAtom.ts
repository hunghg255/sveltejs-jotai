import type {
  Atom,
  ExtractAtomArgs,
  ExtractAtomResult,
  ExtractAtomValue,
  WritableAtom,
  createStore,
} from 'jotai/vanilla';
import { getDefaultStore } from 'jotai/vanilla';

export type Store = ReturnType<typeof createStore>;

interface Options {
  store?: Store;
}

export function useStore(options?: Options) {
  return options?.store ?? getDefaultStore();
}

type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;

function useAtom<Value, Args extends unknown[], Result>(
  atom: WritableAtom<Value, Args, Result>,
  options?: Options,
): {
  subscribe(fn: (payload: Awaited<Value>) => void): () => void;
  update: SetAtom<Args, Result>;
};

function useAtom<Value>(
  atom: Atom<Value>,
  options?: Options,
): {
  subscribe(fn: (payload: Awaited<Value>) => void): () => void;
  update: never;
};

function useAtom<AtomType extends WritableAtom<unknown, unknown[], unknown>>(
  atom: AtomType,
  options?: Options,
): {
  subscribe(fn: (payload: Awaited<ExtractAtomValue<AtomType>>) => void): () => void;
  update: SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>;
};

function useAtom<AtomType extends Atom<unknown>>(
  atom: AtomType,
  options?: Options,
): {
  subscribe(fn: (payload: Awaited<ExtractAtomValue<AtomType>>) => void): () => void;
  update: never;
};

function useAtom<Value, Args extends unknown[], Result>(
  atom: Atom<Value> | WritableAtom<Value, Args, Result>,
  options?: Options,
) {
  const store = useStore(options);

  return {
    subscribe(fn: (payload: Value) => void) {
      fn(store.get(atom));
      return store.sub(atom, () => {
        const nextValue = store.get(atom);
        fn(nextValue);
      });
    },
    update(...args: Args) {
      // @ts-ignore
      if (import.meta.env.DEV && !('write' in atom)) {
        // useAtom can pass non writable atom with wrong type assertion,
        // so we should check here.
        throw new Error('not writable atom');
      }

      // @ts-expect-error: TODO
      return store.set(atom, ...args);
    },
  };
}

export { useAtom };
