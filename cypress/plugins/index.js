/// <reference types="cypress" />
/// <reference types="@frinzekt/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const allureWriter = require('@frinzekt/cypress-allure-plugin/writer');
const del = require('del')
const moveFile = require('move-file')
const path = require('path');

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
    allureWriter(on, config);
    on('after:spec', (spec, results) => {
        if (results.stats.failures === 0 && results.video) {
            // `del()` returns a promise, so it's important to return it to ensure
            // deleting the video is finished before moving on
            return del(results.video)
        }
        else {
            // Enabled Cypress
            return moveFile(results.video, path.join(
                "test_results", // This is similar to the cypress.json results
                results.video.split("/").pop() // Get the filename
            ))
        }
    });
    return config;
};