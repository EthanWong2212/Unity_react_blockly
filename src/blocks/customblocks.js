/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

var up = 
{
    "type": "Up",
    "message0": "Up",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
};

var down =
{
    "type": "Down",
    "message0": "Down",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
};

var left = 
{
    "type": "Left",
    "message0": "Left",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
}

var right = 
{
    "type": "Right",
    "message0": "Right",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
}

Blockly.Blocks['Up']={
    init: function(){
        this.jsonInit(up);
    }
};
Blockly.Blocks['Down']={
    init: function(){
        this.jsonInit(down);
    }
};
Blockly.Blocks['Left']={
    init: function(){
        this.jsonInit(left);
    }
};
Blockly.Blocks['Right']={
    init: function(){
        this.jsonInit(right);
    }
};