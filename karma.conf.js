module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Configurazione di Jasmine opzionale
      },
      clearContext: false // Lascia visibile il contesto di test nel browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // Rimuove tracce di duplicati nei log
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' }, // Per visualizzare i risultati nel browser
        { type: 'lcovonly' }, // Per generare il file lcov.info
        { type: 'text-summary' } // Per un riepilogo a console
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    specReporter: {
      maxLogLines: 5, // Numero massimo di righe nei log per ciascun test
      suppressErrorSummary: false, // Per non stampare il sommario dei log
      suppressFailed: false, // Per non stampare le informazioni riguardo i test falliti
      suppressPassed: true, // Per non stampare le informazioni riguardo i test passati
      suppressSkipped: true, // Per non stampare le informazioni riguardo i test skippati
      showSpecTiming: true, // Per stampare il tempo trascorso durante l'esecuzione di ogni file .spec.ts
      failFast: false, // Per interrompere l'esecuzione dei test al primo errore che viene riscontrato in uno qualsiasi dei test implementati
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [ '--no-sandbox', '--headless',],
      },
    },
    singleRun: false,
    captureTimeout: 120000,
    browserDisconnectTimeout : 120000,
    browserDisconnectTolerance : 1,
    browserNoActivityTimeout : 120000, // Default 10000
    restartOnFileChange: true
  });
};
