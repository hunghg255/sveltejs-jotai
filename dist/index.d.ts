import { Atom, WritableAtom, ExtractAtomValue, ExtractAtomArgs, ExtractAtomResult, createStore } from 'jotai/vanilla';
export { atom, createStore } from 'jotai/vanilla';

type Store = ReturnType<typeof createStore>;
interface Options {
    store?: Store;
}
declare function useStore(options?: Options): {
    get: <Value>(atom: Atom<Value>) => Value;
    set: <Value_1, Args extends unknown[], Result>(atom: WritableAtom<Value_1, Args, Result>, ...args: Args) => Result;
    sub: (atom: Atom<unknown>, listener: () => void) => () => void;
    dev_subscribe_store: (l: (action: {
        type: "write";
        flushed: Set<Atom<unknown>>;
    } | {
        type: "async-write";
        flushed: Set<Atom<unknown>>;
    } | {
        type: "sub";
        flushed: Set<Atom<unknown>>;
    } | {
        type: "unsub";
    } | {
        type: "restore";
        flushed: Set<Atom<unknown>>;
    }) => void, rev: 2) => () => void;
    dev_get_mounted_atoms: () => IterableIterator<Atom<unknown>>;
    dev_get_atom_state: (a: Atom<unknown>) => ({
        d: Map<Atom<unknown>, any & ({
            e: unknown;
        } | {
            v: unknown;
        })>;
    } & ({
        e: unknown;
    } | {
        v: unknown;
    })) | undefined;
    dev_get_mounted: (a: Atom<unknown>) => {
        l: Set<() => void>;
        t: Set<Atom<unknown>>;
        u?: (() => void) | undefined;
    } | undefined;
    dev_restore_atoms: (values: Iterable<readonly [Atom<unknown>, unknown]>) => void;
} | {
    get: <Value_2>(atom: Atom<Value_2>) => Value_2;
    set: <Value_1_1, Args_1 extends unknown[], Result_1>(atom: WritableAtom<Value_1_1, Args_1, Result_1>, ...args: Args_1) => Result_1;
    sub: (atom: Atom<unknown>, listener: () => void) => () => void;
    dev_subscribe_store?: undefined;
    dev_get_mounted_atoms?: undefined;
    dev_get_atom_state?: undefined;
    dev_get_mounted?: undefined;
    dev_restore_atoms?: undefined;
};
type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;
declare function useAtom<Value, Args extends unknown[], Result>(atom: WritableAtom<Value, Args, Result>, options?: Options): {
    subscribe(fn: (payload: Awaited<Value>) => void): () => void;
    update: SetAtom<Args, Result>;
};
declare function useAtom<Value>(atom: Atom<Value>, options?: Options): {
    subscribe(fn: (payload: Awaited<Value>) => void): () => void;
    update: never;
};
declare function useAtom<AtomType extends WritableAtom<unknown, unknown[], unknown>>(atom: AtomType, options?: Options): {
    subscribe(fn: (payload: Awaited<ExtractAtomValue<AtomType>>) => void): () => void;
    update: SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>;
};
declare function useAtom<AtomType extends Atom<unknown>>(atom: AtomType, options?: Options): {
    subscribe(fn: (payload: Awaited<ExtractAtomValue<AtomType>>) => void): () => void;
    update: never;
};

export { useAtom, useStore };
