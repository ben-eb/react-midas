import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import midasFactory from '..';

const Midas = midasFactory();

const css = 'a {}';

test('should render a code example', t => {
    const example = shallow(<Midas>{css}</Midas>);
    t.truthy(example.is('pre'));
    t.is(example.find('span.midas__brace').length, 2);
    t.is(example.find('span.midas__tag').length, 1);
});

test('should apply props', t => {
    const example = shallow(<Midas className={'demo'}>{css}</Midas>);
    t.truthy(example.hasClass('demo'));
    t.is(example.find('span.midas__brace').length, 2);
    t.is(example.find('span.midas__tag').length, 1);
});
