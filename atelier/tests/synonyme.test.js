import assert from 'node:assert/strict';
import { it } from 'node:test';
import { synonyme } from '../public/js/brain.js';

it('C1 : coucou, hello, bonsoir donnent salut', () => {
  assert.equal(synonyme('coucou'), 'salut');
  assert.equal(synonyme('hello'), 'salut');
  assert.equal(synonyme('bonsoir'), 'salut');
});

it('C2 : help et sos donnent aide', () => {
  assert.equal(synonyme('help'), 'aide');
  assert.equal(synonyme('sos'), 'aide');
});

it('C3 : casse et espaces autour ne comptent pas', () => {
  assert.equal(synonyme('  HELLO '), 'salut');
});

it('C4 : autre message revient en minuscules sans espaces autour', () => {
  assert.equal(synonyme('  Météo '), 'météo');
});

it('C5 : ce qui n’est pas du texte donne "" sans erreur', () => {
  assert.equal(synonyme(undefined), '');
  assert.equal(synonyme(null), '');
  assert.equal(synonyme(42), '');
});