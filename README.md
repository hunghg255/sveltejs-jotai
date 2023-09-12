# sveltejs-jotai

Primitive and flexible state management for Svelte based on [Jotai](https://github.com/pmndrs/jotai).

Experimental. Check [this](https://github.com/pmndrs/jotai/discussions/1514) for more info.

## Demo

[Demo](https://stackblitz.com/edit/vitejs-vite-myurs9?file=src%2FApp.svelte)

## Installation

```bash
pnpm add jotai sveltejs-jotai
```

## Usage

```ts
import { atom } from 'sveltejs-jotai';

export const countAtom = atom(0);
```

```html
<script lang="ts">
  import { useAtom } from 'sveltejs-jotai'
  import { countAtom } from './atoms'
  const count = useAtom(countAtom)
</script>

<button on:click={() => count.update(prev => prev + 1)}>
  Clicks: {$count}
</button>
```

## Atom

An atom represents a piece of state. All you need is to specify an initial value, which can be primitive values like strings and numbers, objects and arrays. You can create as many primitive atoms as you want.

```ts
import { atom } from 'sveltejs-jotai';

const countAtom = atom(0);
const countryAtom = atom('Japan');
const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka']);
const mangaAtom = atom({ 'Dragon Ball': 1984, 'One Piece': 1997, Naruto: 1999 });

// Derived atoms
const doubledCountAtom = atom((get) => get(countAtom) * 2);
const sum = atom((get) => get(countAtom) + get(doubledCountAtom));

// Async atoms
const asyncAtom = atom(async () => 'hello');
```

Read more about [Jotai](https://github.com/pmndrs/jotai) here.

## License

MIT
