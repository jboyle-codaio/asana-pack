import {AuthenticationType} from '@codahq/packs-sdk';
import type {PackVersionDefinition} from '@codahq/packs-sdk';
import {formats} from './formulas';
import {formulas} from './formulas';
import {syncTables} from './formulas';

export const manifest: PackVersionDefinition = {
  version: '1.0',
  formulaNamespace: 'Asana',
  defaultAuthentication: {
    type: AuthenticationType.OAuth2,
    authorizationUrl: 'https://app.asana.com/-/oauth_authorize',
    tokenUrl: 'https://app.asana.com/-/oauth_token',
  },
  networkDomains: ['app.asana.com'],
  // The substance of the pack, imported from other files.
  formulas,
  syncTables,
  formats,
};
