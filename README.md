# umi project

copy from [50projects50days](https://github.com/bradtraversy/50projects50days)

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
## bug

### pokedex

- useEffect 中使用了 `fetch` , unmounted 时没有取消

### insert catch game

- setTimeout 在 unmounted 时没有取消
