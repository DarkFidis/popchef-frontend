import { join, resolve } from 'path'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseDir = resolve(__dirname)
const HtmlWebPackPlugin = require('html-webpack-plugin')

import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

export interface Configuration extends WebpackConfiguration { // Il est possible d'extraire ce type dans un fichier
  devServer?: WebpackDevServerConfiguration // à part, comme par exemple types/webpackConfig.d.ts
}
const htmlPlugin = new HtmlWebPackPlugin({ // Le plugin html va nous aider à créer le fichier html final
  filename: './index.html',
  inject: false,
  template: './static/index.html', // à cette étape, ce fichier n'existe pas encore, nous allons le créer juste après
  // il s'agit du fichier html de base que nous allons écrire pour donner certaines informations à webpack
})

const dev = process.env.NODE_ENV === 'development'
const port = Number(process.env.PORT) || 4000 // à cette étape, nous n'avons pas encore définit la variable d'environnement PORT par défaut
// Mais si cette variable n'existe pas, de toute façon, webpack utilisera le port 4000 (vous pouvez évidemment mettre ce que vous voulez).

export const config: Configuration = {
  devServer: { // Dans le cas où l'application React n'est pas servie par un serveur express, nous allons configurer webpack-dev-server
    compress: true,
    historyApiFallback: true,
    hot: false, // Par défaut, nous considérons que l'environnement est "prod"...
    liveReload: false, // Donc nous n'activons pas le hot/live build and reload
    port, // Le port a été défini plus haut
    static: {
      directory: join(baseDir, 'dist/src'), // Nous déterminons que les fichiers statics se trouvent dans le répertoire dist/src
    },
  },
  entry: resolve(baseDir, 'src', 'index.tsx'), // Nous indiquons à webpack le fichier d'entrée de notre app, dans notre cas cela sera
  // le fichier index.tsx qui se trouve dans le répertoire "src". A cette étape, nous n'avons pas encore créé ce fichier
  mode: dev ? 'development' : 'production', // Le mode est définit grâce à la variable créée un peu plus haut (et donc grâce à la viarable d'environnement NODE_ENV)
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|js)x?$/, // Pour builder les fichiers ts et js, nous utilisons le loader babel-loader avec ses presets
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/, // pour les fichiers tsx nous utilisons le loader ts-loader
        use: { loader: 'ts-loader' },
      },
      {
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'assets/images/[name].[ext]', // Nous rajoutons une option pour renommer les fichiers buildés afin qu'ils
          // gardent le même nom et la même extension que le fichier original. De plus nous indiquons que ces fichiers
          // devront êtres rangés dans assets/images
        },
        test: /\.(png|jpg|gif|ico|svg)$/, // pour les images nous utilisons file-loader
      },
      {
        test: /\.(sa|sc|c)ss$/, // les fichiers css, sass, etc s'il y en a seront également buildés via file-loader
        use: ['file-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.ttf$/, // les fonts ttf sont également buildées grâce à file-loader en conservant leur nom de fichier original
        use: { loader: 'file-loader?name=assets/fonts/[name].[ext]' },
      },
    ],
  },
  output: {
    filename: 'index.js', // le fichier généré par webpack sera index.js
    path: resolve(baseDir, 'dist/src'), // il sera rangé dans dist/src
    publicPath: '/',
  },
  performance: {
    hints: false, // désactive les logs concernant la taille du bundle
    maxAssetSize: 512000,
    maxEntrypointSize: 512000, // ces deux lignes déterminent la taille max des assets et du bundle
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()], // utilisation du plugin html défini plus haut, et CleanWebpackPlugin qui servira à supprimer les anciens fichiers ou fichiers inutilisés de répertoire dist/ a chaque nouveau build réussi
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules'], // permet de résoudre le path d'un dossier de manière "absolue"
  },
}
export default config
