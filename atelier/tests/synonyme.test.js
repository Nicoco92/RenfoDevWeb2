import { it } from 'node:test';
import assert from 'node:assert/strict';
import { synonyme } from '../public/js/brain.js';

it('C1 : coucou, hello et bonsoir donnent salut', () => {
    assert.equal(synonyme('coucou'), 'salut');
    assert.equal(synonyme('hello'), 'salut');
    assert.equal(synonyme('bonsoir'), 'salut');
});

it('C2 : help et sos donnent aide', () => {
    assert.equal(synonyme('help'), 'aide');
    assert.equal(synonyme('sos'), 'aide');
});

it('C3 : la casse et les espaces autour ne comptent pas', () => {
    assert.equal(synonyme('  HELLO '), 'salut');
    assert.equal(synonyme(' Help  '), 'aide');
});

it('C4 : un autre message revient en minuscules, sans les espaces autour', () => {
    assert.equal(synonyme('  Météo '), 'météo');
    assert.equal(synonyme('Concert'), 'concert');
});

it('C5 : ce qui n’est pas du texte donne une chaîne vide sans erreur', () => {
    assert.equal(synonyme(undefined), '');
    assert.equal(synonyme(null), '');
    assert.equal(synonyme(42), '');
    assert.equal(synonyme({}), '');
});
