# Atomic Book 🦄 🎨 ⚛️ 📖

<div style="display: flex;flex-direction:column;align-items: center;margin-bottom: 24px">
  <div style="display:flex;align-items:center;margin:16px 0;">
    <img style="max-width: 180px" src="https://scholarblogs.emory.edu/lits/files/2019/03/atomicdesign.png" alt="Atomic design">
    <h2 style="margin-left: 24px;font-size:32px">+</h2>
    <img style="max-width: 180px" src="https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm.png" alt="Storybook">
  </div>
  <h3 style="padding:8px 0;margin-bottom: 24px;border-bottom: 1px solid #cecece">With</h3>
  <img src="https://i.pinimg.com/originals/c3/8e/e8/c38ee8475ee7f3680f706c56c3a1194c.png" alt="Typescript" alt="Typescript">
</div>


## Installation

```
npm install atomic-book
```

## Usage

```Typescript
import Typo, { TypoTypes } from 'atomic-book/atoms/Typo'

export default ({ title }) => {
  return (
    <Typo type={TypoTypes.StandardTitle}>
      {title}
    </Typo>
  )
}
```

## Development

Start the storybook and developing new component
```
// Clone the project
atomic-book > npm install
atomic-book > npm start
```

### Build

```
npm build
```

## Getting Helps

```
npm start
```

<p style="text-align: center;margin-top: 36px">
  forked from <a href="https://github.com/jmlivingston/react-components-library">jl-react-components-library</a>
</p> 