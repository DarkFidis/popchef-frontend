const { resolve } = require('path')
import coverageThreshold from './src/test-utils/coverage-threshold.json'
// Ce fichier permet de définir les seuils de test coverage que vous souhaitons atteindre pour ce projet

const baseDir = __dirname

module.exports = {
  clearMocks: true, // À chaque fin de test, les mocks seront automatiquement nettoyés
  collectCoverageFrom: [
    // on définit les chemins des fichiers qui doivent être pris en compte dans le calcul du coverage
    'src/**/*.component.tsx', // nous allons couvrir les composants
    'src/**/*.container.tsx', // les containers
    'src/**/*.page.tsx', // les pages
    'src/**/*.hook.tsx', // les hooks
    'src/**/*.utils.ts', // les utils.ts
    'src/**/*.utils.tsx', // les utils.tsx
    'src/styles/*.ts', // les fichiers de styles globaux
    // vous pouvez ajouter d'autres fichiers à couvrir ou exclure certains fichier en rajoutant un ! devant le chemin, par exemple : '!src/styles/*.ts'
  ],
  coverageDirectory: resolve(baseDir, 'dist', 'coverage'), // on détermine le repertoire dans lequel les fichiers de coverage seront générés
  coverageReporters: ['text', 'html'], // on configure les extensions de rapports de coverage que l'on souhaite générer
  coverageThreshold: {
    global: coverageThreshold, // on déclare les seuils de coverage grâce au fichier importé plus aut
  },
  globalSetup: resolve(baseDir, 'src', 'test-utils', 'jest-global-setup.js'), // On peut rajouter un fichier supplémentaire de setup spécifique aux tests, pour l'instant
  // ce fichier n'est pas encore créé, nous y reviendront après
  globals: {
    'ts-jest': {
      tsconfig: resolve(baseDir, 'tsconfig.json'), // on configure jest pour fonctionner avec typescript en lui indiquant le chemin du tsconfig.json
    },
  },
  moduleDirectories: ['./node_modules', './src'], // on spécifies les répertoires dans lesquels jest doit chercher les imports
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      resolve(baseDir, 'src', 'test-utils', 'mocks', 'image.js'),
  }, // on spécifie un repertoire de mock pour certains types de fichiers, comme les fonts, les images, etc
  modulePathIgnorePatterns: [resolve(baseDir, 'dist')], // on ignore le repertoire dist (ce dossier est créé automatiquement au build de l'app par webpack, nous n'avons pas besoin de le tester)
  preset: 'ts-jest/presets/js-with-babel', // on déclare un preset pour que jest fonctionne bien avec typescript
  rootDir: baseDir, // on déclare le dossier root
  testEnvironment: 'jsdom', // on déclare l'environnement de test, ici on utilise jsdom pour simuler le dom. Dans des tests back on pourrait avoir "node" par exemple
}
