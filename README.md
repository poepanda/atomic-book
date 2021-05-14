# Atomic Book 🦄 🎨 ⚛️ 📖
  <div style="text-align: center">
    <img style="max-width: 200px;margin-top:-16px" src="https://scholarblogs.emory.edu/lits/files/2019/03/atomicdesign.png" alt="Atomic design" />
    <img src="https://camo.githubusercontent.com/3c2a5b77726528a5b9618bf65a6e8fc26baedce970dc2eb39d789deeb9f703fa/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f313130303830343438353631363536363237332f734f63742d54786d2e706e67" alt="Storybook" data-canonical-src="https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm.png" style="max-width:180px" />
  </div>
  <h3 style="text-align: center;margin-top: 16px">With</h3>
  <img style="margin-bottom: 16px" src="https://i.pinimg.com/originals/c3/8e/e8/c38ee8475ee7f3680f706c56c3a1194c.png" alt="Typescript" alt="Typescript">


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# Installation

```
npm install atomic-book
```

# Usage

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

# Development

Start the storybook and developing new component
```
// Clone the project
atomic-book > npm install
atomic-book > npm start
```

## Build

```
npm build
```

# Getting Helps

Contact us at `open@shopback.com`

# Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AwesomeComponent)
3. Commit your Changes (git commit -m 'Add some AwesomeComponent')
4. Push to the Branch (git push origin feature/AwesomeComponent)
5. Open a Pull Request


<p style="text-align: center;margin-top: 36px">
  forked from <a href="https://github.com/jmlivingston/react-components-library">jl-react-components-library</a>
</p> 

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/poepanda/atomic-book.svg?style=for-the-badge
[contributors-url]: https://github.com/poepanda/atomic-book/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/poepanda/atomic-book.svg?style=for-the-badge
[forks-url]: https://github.com/poepanda/atomic-book/network/members
[stars-shield]: https://img.shields.io/github/stars/poepanda/atomic-book.svg?style=for-the-badge
[stars-url]: https://github.com/poepanda/atomic-book/stargazers
[issues-shield]: https://img.shields.io/github/issues/poepanda/atomic-book.svg?style=for-the-badge
[issues-url]: https://github.com/poepanda/atomic-book/issues
[license-shield]: https://img.shields.io/github/license/poepanda/atomic-book.svg?style=for-the-badge
[license-url]: https://github.com/poepanda/atomic-book/blob/master/LICENSE
