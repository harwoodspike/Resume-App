import { createVuestic, createIconsConfig } from 'vuestic-ui'

const vuesticPlugin = createVuestic({
  config: {
    icons: createIconsConfig({
      aliases: [
        { name: 'github', to: 'fa-brands-github' },
        { name: 'google', to: 'fa-brands-google' },
        { name: 'bitbucket', to: 'fa-brands-bitbucket' },
        { name: 'gitlab', to: 'fa-brands-gitlab' },
        { name: 'apple', to: 'fa-brands-apple' },
      ],
      fonts: [
        { name: 'fa-brands-{iconName}', resolve: ({ iconName }) => ({ class: `fa-brands fa-${iconName}` }) }
      ]
    })
  }
})

export {
  vuesticPlugin
}
